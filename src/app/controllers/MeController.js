import Course from "../models/Course.js";

class MeController {
  //[Get], /me
  storedCourses(req, res, next) {
    Course.find({})
      .lean()
      .then(courses => res.render("me/stored-courses",{
         courses
        }))
      .catch(next);
  }
}
export default new MeController();
    