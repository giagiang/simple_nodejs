import Course from "../models/Course.js";

class MeController {
  //[Get], /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({deletedAt: {$exists: false}})
      .lean()
      .then((courses) =>
        res.render("me/stored-courses", {
          courses,
        })
      )
      .catch(next);
  }
  
  trashCourses(req, res, next) {
    Course.find({deletedAt: {$exists: true}})
    .lean()
      .then((courses) => {

        res.render("me/trash-courses", {
          courses,
        });
      })
      .catch(next);
}
}
export default new MeController();
