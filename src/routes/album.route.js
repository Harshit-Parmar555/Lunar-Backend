import express from "express";
import {
  getAllAlbums,
  getAlbumById,
  getFeaturedAlbums,
} from "../controllers/album.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";
const albumRouter = express.Router();

albumRouter.get("/", protectedRoute, getAllAlbums);
albumRouter.get("/featured", protectedRoute, getFeaturedAlbums);
albumRouter.get("/:id", protectedRoute, getAlbumById);

export default albumRouter;
