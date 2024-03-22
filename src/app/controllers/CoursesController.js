import Course from "../models/Course.js";

class CoursesController {
  // [GET] /courses/:slug

  show(req, res, next) {
    Course.findOne({ _id: req.params.id })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      })
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store

  store(req, res, next) {
    req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses  "))
      .catch((error) => {});
  }
  //[GET]/COURSES/:id/:edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => res.render("courses/edit", { course }))
      .catch(next);
  }
  //[PUT]/COURSES/:ID
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // soft delete: means that we marking course document with deletedAt: time
  //[delete]/courses/:id
  delete(req, res, next) {
    const now = new Date();
    Course.findOneAndUpdate({ _id: req.params.id }, { deletedAt: now })
      .then(() => {
        // console.log("update deteed")
        res.redirect("back");
      })
      .catch(next);
  }
  // [PATCH]/course/:id/restore
  async restore(req, res, next) {
    // 1. find document
    let restoringCourse = await Course.findOne({ _id: req.params.id });
    // 2. remove attribute
    restoringCourse.deletedAt = undefined;
    // 2.1 try to update another attribute
    //restoringCourse.level = "testignig";
    // 3. save
    await restoringCourse.save();
    // 4. redirect back to previous page

    res.redirect("back");
  }

  //[DELETE]/course/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[POST]/COURSE/handle-form-actions
  handleFormActions(req, res, next) {
    const now = new Date();
    switch (req.body.actions) {
      case "delete":
        // { "city_id": { "$in": idList } }
        // Course.updateMany({ "_id": { "$in": req.body.courseIds } }, )
        Course.updateMany(
          { "_id": { "$in": req.body.courseIds } },
          { $set: { isDeleted: true, deletedAt: now } },
        )
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        console.log('Invalid action:', req.body.actions); // Thông báo nếu hành động không hợp lệ

        res.json({ message: "action is invalid" });
    }
  }
}


export default new CoursesController();
