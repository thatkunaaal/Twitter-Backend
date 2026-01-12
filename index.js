import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbURI } from "./src/config/index.js";
import { Tweet } from "./src/models/index.js";
import apiRoutes from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server is up and running on ${PORT}.`);
  await mongoose.connect(mongodbURI);
  console.log("You have successfully connected to DB.");
});
