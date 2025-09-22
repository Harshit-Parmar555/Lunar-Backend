import express from "express";
import { getAllAlbums, getAlbumById } from "../controllers/album.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
const albumRouter = express.Router();

albumRouter.get("/", protect, getAllAlbums);
albumRouter.get("/:id", protect, getAlbumById);

export default albumRouter;
