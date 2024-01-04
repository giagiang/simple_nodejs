import express from "express";
const router = express.Router();
import {newsController} from "../app/controllers/NewsController.js";

// newsController.index
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

export default router;
