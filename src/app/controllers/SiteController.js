class SiteController {
  //[Get],
  home(req, res) {
    res.render("home");
  }

  //[Get], /search
  search(req, res) {
    res.send("search");
  }
}
module.exports = new SiteController();
