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
const newsController = new NewsController;

export { newsController }
// export default new NewsController();
