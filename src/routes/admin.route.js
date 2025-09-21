import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
import { addSong } from "../controllers/admin.controller.js";
import { uploadMedia } from "../middlewares/multer.js";
const adminRouter = express.Router();

adminRouter.use(protect, adminOnly);

adminRouter.post(
  "/add-song",
  uploadMedia.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    {
      name: "audioFile",
      maxCount: 1,
    },
  ]),
  addSong
);

export default adminRouter;
