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
//   async store(req, res, next) {
//     // const formData = req.body;
//     // formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
//     const course = new Course({
//       // name: "abc",
//       // videoId: "sadfasdf"
//     });
//     console.log(course)
//     try {
//       const savedCourse = await course.save()
//       //1/ hamd save
// //      2/ loi Uncaught MongooseError MongooseError: Query.prototype.exec() no longer accepts a callback
// // 3 xoa di cai lai node module rm -rf node_modules , sau do npm i
// // 4 doi phien ban mongoose
// // 5 cau hinh mongoose 
//       res.redirect(`/courses/  `);
//     }catch(error) {
//       console.error("error while saving:", error)
//     }
//     console.log("nothing")
//     // course
//     //   .save()
//     //   .then((savedCourse) => {
//     //     res.redirect(`/courses/  `);
//     //   })
//     //   .catch((error) => {
//     //     console.error("errror :", error);
//     //   });
//   }
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
    Course.deleteOne({_id: req.params.id})
    .then(()=>res.redirect("back"))
    .catch(next);
    console.log('testid',req.params.id );
  }
}

export default new CoursesController();
