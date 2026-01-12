import express from "express";
import { createHashtag, deleteHashtag } from "../../controller/index.js";
const router = express.Router();

router.post("/", createHashtag);

router.delete("/", deleteHashtag);

export default router;
