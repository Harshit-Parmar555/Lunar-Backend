import express from "express";
import {
  getAllSongs,
  trendingSongs,
  getFeaturedSongs,
  searchSongs,
} from "../controllers/song.controller.js";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
const songRouter = express.Router();

songRouter.get("/", protect, adminOnly, getAllSongs);
songRouter.get("/trending", trendingSongs);
songRouter.get("/featured", getFeaturedSongs);
songRouter.get("/search", searchSongs);

export default songRouter;
