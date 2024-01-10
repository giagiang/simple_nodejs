import express from "express";
const router = express.Router();
import coursesController from "../app/controllers/CoursesController.js";

// newsController.index
router.get("/:slug", coursesController.show);


export default router;
     