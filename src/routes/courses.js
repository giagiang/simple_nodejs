import express from "express";
const  router = express.Router();
import courseController from "../app/controllers/CoursesController.js";

// newsController.index

router.get("/create", courseController.create);
router.post('/store',courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-form-actions", courseController.handleFormActions,);
router.put("/:id", courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete("/:id", courseController.delete);
router.delete("/:id/force", courseController.forceDelete);



router.get("/:slug", courseController.show);

export default router;
     