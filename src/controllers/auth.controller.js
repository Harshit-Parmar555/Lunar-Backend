import User from "../models/user.model.js";
import { auth } from "../utils/firebase.config.js";
import { generateJwt } from "../utils/jwt.js";
import dotenv from "dotenv";

const isProduction = process.env.NODE_ENV === "production";
dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { tokenId } = req.body;

    if (!tokenId) {
      return res.status(400).json({
        success: false,
        message: "Token is required",
      });
    }

    const decodedToken = await auth.verifyIdToken(tokenId);

    if (!decodedToken) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }

    const { name, picture, email } = decodedToken;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: name,
        profile: picture,
        email,
      });
      await user.save();
    }

    const token = generateJwt(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      success: true,
      message: "User signed up successfully",
      user,
    });
  } catch (error) {
    console.error("Error in signing up user:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while signing up user",
    });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : true,
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error("Error in logging out user:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while logging out user",
    });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const isAdmin = process.env.ADMIN_EMAIL === req.user.email;
    const userEmail = req.user.email;
    const user = await User.findOne({ userEmail });
    return res.status(200).json({
      success: true,
      message: "User is authenticated",
      isAuthenticated: true,
      isAdmin,
      user,
    });
  } catch (error) {
    console.error("Error in checking authentication:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while checking authentication",
    });
  }
};
