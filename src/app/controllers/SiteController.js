import Course from "../models/Course.js";

class SiteController {
  // [Get],
  index(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => {
        res.render("home", { courses });
      })
      .catch((error) => {
        next(error);
      });
  }
  // home(req,res){
  //   res.send("home");
  // }

  //[Get], /search
  search(req, res) {
    res.render("search");
  }
}
export default new SiteController();
