import * as path from 'path';
import express from "express";
import morgan  from 'morgan';
import  handlebars from "express-handlebars";

const __dirname = path.resolve();

import route from "./routes/index.js"
import db from './config/db/index.js'

const app = express();
const port = 3000;
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// neu goi ntn thanh cong, nghia la handlebars se la 1 function.
//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
