import Course from "../models/Course.js";

class CoursesController {
  // [GET] /courses/:slug

  show(req, res) {
    // .lean()
    res.send("Courses Details");
  }
}

export default new CoursesController();
