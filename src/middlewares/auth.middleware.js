import { clerkClient } from "@clerk/express";

export const protect = (req, res, next) => {
  if (!req.auth() || !req.auth().userId) {
    return res.status(401).json({
      error: "Authentication required",
      message: "No valid authentication token provided",
      details: "Please provide valid Clerk authentication headers",
    });
  }
  next();
};

export const adminOnly = async (req, res, next) => {
  try {
    const currentUserEmail = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL ===
      currentUserEmail.primaryEmailAddress.emailAddress;
    if (!isAdmin) {
      return res.status(403).json({
        message: "Unauthorized - You must be an admin :)",
      });
    }
    next();
  } catch (error) {
    console.error("Admin middleware error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred",
    });
  }
};
