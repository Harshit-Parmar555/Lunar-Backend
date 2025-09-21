import User from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstname, lastname, imageUrl } = req.body;

    if (!id || !firstname || !lastname || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    let user = await User.findOne({ clerkId: id });
    if (!user) {
      user = new User({
        username: firstname + " " + lastname,
        profile: imageUrl,
        clerkId: id,
      });
      await user.save();
    }
    return res.status(200).json({
      success: true,
      message: "Authentication successful.",
    });
  } catch (error) {
    console.error("Auth callback error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};
