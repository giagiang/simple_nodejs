import Course from "../models/Course.js";

class CoursesController {
  // [GET] /courses/:slug

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
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
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect(`/courses/  `))
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
  //[delete]/courses/:id
  delete(req,res,next){
    Course.delete({_id: req.params.id})
    .then(()=>res.redirect("back"))
    .catch(next);

  }
}

export default new CoursesController();
