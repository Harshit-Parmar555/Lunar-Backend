import Song from "../models/song.model.js";
import Album from "../models/album.model.js";
import { uploadImageToFirebase } from "../utils/media.operations.js";

export const addSong = async (req, res) => {
  try {
    const { title, artist, duration, album } = req.body;
    if (!title || !artist || !duration) {
      return res.status(400).json({
        success: false,
        message: "Title, artist, and duration are required fields.",
      });
    }
    const imageFile = req.files["coverImage"]?.[0];
    const audioFile = req.files["audioFile"]?.[0];
    if (!imageFile || !audioFile) {
      return res.status(400).json({
        success: false,
        message: "Cover image and audio file are required.",
      });
    }
    const coverImageUrl = await uploadImageToFirebase(imageFile);
    const audioFileUrl = await uploadImageToFirebase(audioFile);
    const newSong = new Song({
      title,
      artist,
      coverImage: coverImageUrl,
      duration,
      url: audioFileUrl,
    });
    await newSong.save();
    if (album) {
      await Album.findByIdAndUpdate(album, {
        $push: { songs: newSong._id },
      });
    }

    res.status(201).json({
      success: true,
      message: "Song added successfully",
      song: newSong,
    });
  } catch (error) {
    console.error("Error adding song:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while adding the song.",
    });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Song ID is required",
      });
    }
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({
        success: false,
        message: "Song not found",
      });
    }
    if (song.album) {
      await Album.findByIdAndUpdate(song.album, {
        $pull: { songs: song._id },
      });
    }

    await Song.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Song deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while deleting the song.",
    });
  }
};

export const addAlbum = async (req, res) => {
  try {
    const { title, artist } = req.body;
    if (!title || !artist) {
      return res.status(400).json({
        success: false,
        message: "Title and artist are required fields.",
      });
    }
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Cover image is required.",
      });
    }
    const coverImageUrl = await uploadImageToFirebase(req.file);
    const newAlbum = new Album({
      title,
      artist,
      coverImage: coverImageUrl,
    });
    await newAlbum.save();
    res.status(201).json({
      success: true,
      message: "Album added successfully",
      album: newAlbum,
    });
  } catch (error) {
    console.error("Error adding album:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while adding the album.",
    });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }
    await Song.deleteMany({ album: id });
    await Album.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Album and its associated songs deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting album:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while deleting the album.",
    });
  }
};

export const checkAdmin = async (req, res) => {
  return res.status(200).json({ admin : true });
}

