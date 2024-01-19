import express from "express";
const  router = express.Router();
import courseController from "../app/controllers/CoursesController.js";

// newsController.index

router.get("/create", courseController.create);
router.post('/store',courseController.store);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);


router.get("/:slug", courseController.show);

export default router;
     