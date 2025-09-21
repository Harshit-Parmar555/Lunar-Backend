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
