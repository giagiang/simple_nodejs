import * as path from "path";
import express from "express";
import morgan from "morgan";
import methodOverride from "method-override";
import handlebars from "express-handlebars";
import customHandlebars from "./helpers/customHandlebars.js"
const __dirname = path.resolve();

import SortMiddleware from "./app/middlewares/SortMiddleware.js";
import route from "./routes/index.js";
import db from "./config/db/index.js";

const app = express();
const port = 3000;
db.connect();

// console.log("dirname value:", __dirname);
app.use(express.static(__dirname + "/resources"));
app.use(express.static(path.join(__dirname, "src", "public")));
// console.log(path.join(__dirname, "public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));

//custom middleware
app.use(SortMiddleware);

// HTTP logger
app.use(morgan("combined"));

// neu goi ntn thanh cong, nghia la handlebars se la 1 function.
//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    // helpers:require  ('./helpers/handlebars.js')
    helpers: customHandlebars
   })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src", "resources", "views"));

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
