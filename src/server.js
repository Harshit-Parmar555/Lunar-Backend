import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connect.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

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
