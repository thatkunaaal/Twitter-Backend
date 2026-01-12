import express from "express";
import hashtagRoutes from "./hashtag-routes.js";
const router = express.Router();

router.use("/hashtags", hashtagRoutes);

export default router;
