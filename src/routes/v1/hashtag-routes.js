import express from "express";
import { createHashtag } from "../../controller/index.js";
const router = express.Router();

router.post("/", createHashtag);

export default router;
