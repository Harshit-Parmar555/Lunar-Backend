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
songRouter.get("/trending", protect,trendingSongs);
songRouter.get("/featured",protect ,getFeaturedSongs);
songRouter.get("/search", protect,searchSongs);

export default songRouter;
