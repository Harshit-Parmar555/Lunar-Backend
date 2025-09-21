import express from "express";
import { getAllAlbums ,getAlbumById} from "../controllers/album.controller.js";
const albumRouter = express.Router();

albumRouter.get("/",getAllAlbums);
albumRouter.get("/:id",getAlbumById);

export default albumRouter;
