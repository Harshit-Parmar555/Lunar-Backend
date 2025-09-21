import Song from "../models/song.model.js";
import Album from "../models/album.model.js";
import User from "../models/user.model.js";

export const getStats = async (req, res) => {
  try {
    const [totalSongs, totalAlbums, totalUsers] = await Promise.all([
      Song.countDocuments(),
      Album.countDocuments(),
      User.countDocuments(),
    ]);
    res.status(200).json({
      success: true,
      data: { totalSongs, totalAlbums, totalUsers },
    });
  } catch (error) {
    console.error("Error in fetching stats:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while fetching stats.",
    });
  }
};
