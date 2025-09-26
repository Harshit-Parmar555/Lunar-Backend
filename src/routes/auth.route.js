import express from "express";
import { signUp, logout, checkAuth } from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";
const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/logout", logout);
authRouter.get("/check", protectedRoute, checkAuth);

export default authRouter;
