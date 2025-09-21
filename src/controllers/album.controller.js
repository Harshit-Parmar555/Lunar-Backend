import Album from "../models/album.model.js";

export const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Albums fetched successfully",
      albums,
    });
  } catch (error) {
    console.error("Error in fetching all albums:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while fetching all albums.",
    });
  }
};

export const getAlbumById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Album id is required",
      });
    }
    const album = await Album.findById(id);
    if (!album) {
      return res.status(404).json({
        success: false,
        message: "Album not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Album fetched successfully",
      album,
    });
  } catch (error) {
    console.error("Error in fetching album by Id:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while fetching album by Id.",
    });
  }
};
