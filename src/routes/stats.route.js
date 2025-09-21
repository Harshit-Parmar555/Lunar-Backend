import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
import { getStats } from "../controllers/stats.controller.js";
const statsRouter = express.Router();

statsRouter.get("/", protect, adminOnly, getStats);

export default statsRouter;
