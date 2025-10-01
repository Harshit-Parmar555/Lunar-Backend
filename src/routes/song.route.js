import express from "express";
import {
  getAllSongs,
  trendingSongs,
  getFeaturedSongs,
  searchSongs,
  getMadeForYouSongs,
} from "../controllers/song.controller.js";
import { protectedRoute, adminOnly } from "../middlewares/auth.middleware.js";
const songRouter = express.Router();

songRouter.get("/", protectedRoute, adminOnly, getAllSongs);
songRouter.get("/trending", protectedRoute, trendingSongs);
songRouter.get("/featured", protectedRoute, getFeaturedSongs);
songRouter.get("/made-for-you", protectedRoute, getMadeForYouSongs);
songRouter.get("/search", protectedRoute, searchSongs);

export default songRouter;
