import Course from "../models/Course.js"
class SiteController {
  //[Get],
  async index(req, res) {

    // console.info("index running ")
    // await Course.create({ name: 'small' });

    Course.find({}).exec()
      .then(function (courses) {
        console.log("found courses", courses)
        res.json(courses);
      })
      .catch(function (err) {
        console.log(err);
      });
    // res.render("home");

  }

  //[Get], /search
  search(req, res) {
    res.send("search");
  }

  // async create(req, res) {
  //   await Course.create({ name: 'small', description: "okok" });

  //   res.send("fdsafda")
  // }
}
export default new SiteController();
