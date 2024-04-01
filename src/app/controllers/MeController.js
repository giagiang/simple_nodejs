import Course from "../models/Course.js";

class MeController {
  //[Get], /me/stored/courses
  // storedCourses(req, res, next) {
  //   let courseQuery = Course.find({}).lean();

  //   if (req.query.hasOwnProperty("_sort")) {
  //     const isValidType = ["asc", "desc"].includes(req.query.type);
  //     courseQuery = courseQuery.sort({
  //       [req.query.column]: isValidType ? req.query.type : "desc",
  //     });
  //   }

  //   let deletedCoursesQueryPromise = Course.find({
  //     deletedAt: { $exists: true },
  //   });
  //   console.info("deletedCoursesQueryPromise", deletedCoursesQueryPromise);
  //   // let courses
  //   // let deletedCount
  //   Promise.all([
  //     Course.find({ deletedAt: { $exists: false } }).lean(),
  //     deletedCoursesQueryPromise,
  //   ])
  //     .then(([courses, deletedCourses]) => {
  //       console.info("soft deletedCourse, ", deletedCourses);

  //       res.render("me/stored-courses", {
  //         deletedCount: deletedCourses.length,
  //         courses: courses,
  //       });
  //     })
  //     .catch(next);
  // }

  storedCourses(req, res, next) {
    let courseQuery = Course.find({}).lean();

    if (req.query.hasOwnProperty("_sort")) {
        const isValidType = ["asc", "desc"].includes(req.query.type);
        courseQuery = courseQuery.sort({
            [req.query.column]: isValidType ? req.query.type : "desc",
        });
    }

    let deletedCoursesQueryPromise = Course.find({
        deletedAt: { $exists: true },
    });

    // Truy vấn để lấy danh sách khóa học chưa xóa
    Course.find({ deletedAt: { $exists: false } }).lean()
        .then((courses) => {
            // Log danh sách khóa học chưa xóa
            console.log("Stored courses:", courses);

            // Tiếp tục thực hiện truy vấn danh sách khóa học đã xóa
            return deletedCoursesQueryPromise.then((deletedCourses) => {
                // Log danh sách khóa học đã xóa
                console.log("Deleted courses:", deletedCourses);

                // Render template và trả về kết quả cho người dùng
                res.render("me/stored-courses", {
                    deletedCount: deletedCourses.length,
                    courses: courses,
                });
            });
        })
        .catch(next);
}

  //[Get] /me/stored/courses
  trashCourses(req, res, next) {
    Course.find({ deletedAt: {$exists: true}  })
      .lean()
      .then((courses) => {
        console.log ("trash Course:" , courses );
        // console.info("courses has deleted attribute:", courses);
        // console.log("Number of deleted courses:", courses.length); // Log the count

        res.render("me/trash-courses", {
          courses,
        });
      })
      .catch(next);
  }
}
export default new MeController();
