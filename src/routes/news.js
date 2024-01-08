import express from "express";
const router = express.Router();
import {newsController} from "../app/controllers/NewsController.js";

// newsController.index
router.get("/:slug", newsController.show);
router.get("/", newsController.index);

export default router;
     