import express from "express";
import { getStats } from "../controllers/stats.controller.js";
import { protectedRoute, adminOnly } from "../middlewares/auth.middleware.js";
const statsRouter = express.Router();

statsRouter.get("/", protectedRoute, adminOnly, getStats);

export default statsRouter;
