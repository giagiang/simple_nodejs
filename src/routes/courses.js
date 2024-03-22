import express from "express";
const  router = express.Router();
import courseController from "../app/controllers/CoursesController.js";

// newsController.index

router.get("/create", courseController.create);
router.post('/store',courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-form-actions", courseController.handleFormActions,);
router.put("/:id", courseController.update);
router.post('/:id/restore', courseController.restore);
// /courses/65efd0a26767c6171a74773e/restore  
router.post("/:id", courseController.delete);
// /courses/65efd0a26767c6171a74773e
router.delete("/:id/force", courseController.forceDelete);
router.get("/:slug", courseController.show);

export default router;
     