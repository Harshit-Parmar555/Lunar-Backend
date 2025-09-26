// Importing necessary modules
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Protected route for authentication
export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({ success: false, message: "Invalid Token" });
    }
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const adminOnly = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      console.error("ADMIN_EMAIL not configured in environment variables");
      return res.status(500).json({
        success: false,
        message: "Admin configuration error",
      });
    }

    if (req.user.email !== adminEmail) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized - Admin access required",
      });
    }

    console.log(`Admin access granted to: ${req.user.email}`);
    next();
  } catch (error) {
    console.error("Error in admin middleware:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred during admin verification",
    });
  }
};
