class NewsController {
    //[Get], news
  index(req,res){
    res.render('news');
  }   

  //[Get], /news/:slug
  show(req,res){
    res.send("good morning, welcome to HoaHocTro")
  }
}
module.exports = new NewsController;