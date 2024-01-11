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


  //[GET] /courses/create
  create(req, res, next) {
      res.render('courses/create');
    }

  //[POST] /courses/store
  store(req,res, next){
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
     const course = new Course(formData);
    course.save()
        .then(() => res.redirect(`/courses/  `))
        .catch(error => {

        });
  }

}

export default new CoursesController();
