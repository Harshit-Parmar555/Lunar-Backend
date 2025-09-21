import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
const adminRouter = express.Router();

adminRouter.use(protect, adminOnly);

export default adminRouter;
