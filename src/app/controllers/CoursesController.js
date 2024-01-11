import Course from "../models/Course.js";

class CoursesController {
  // [GET] /courses/:slug

  show(req, res, next) {
      Course.findOne({slug: req.params.slug})
           .lean()
           .then(course=>{
             res.render('courses/show',{course});
           })
           .catch(next)



  

  }
}

export default new CoursesController();
