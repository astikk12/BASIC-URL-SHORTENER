import express from "express";
import connectDB from "./database/url.database.js";
import router from "./routes/routes.model.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("server is working");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
