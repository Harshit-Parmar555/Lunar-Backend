import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connect.js";
import morgan from "morgan";
import logger from "./utils/logger.js";
import { clerkMiddleware } from "@clerk/express";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(clerkMiddleware());

// logger for api's
const morganFormat = ":method :url :status :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

import authRouter from "./routes/auth.route.js";
import adminRouter from "./routes/admin.route.js";
import songRouter from "./routes/song.route.js";
import albumRouter from "./routes/album.route.js";
import statsRouter from "./routes/stats.route.js";

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/songs", songRouter);
app.use("/api/v1/albums", albumRouter);
app.use("/api/v1/stats", statsRouter);

// server started
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
