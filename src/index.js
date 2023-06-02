const path = require("path");
const express = require("express");
const app = express(); //trả lại đối tượng đại diện nodejs => đối tượng giúp xây dựng web
const port = 3000; //cổng run website
const morgan = require("morgan"); //import morgan
const hbs = require("express-handlebars"); //import handlebars

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "\\resources\\views"));

route(app);

// run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
