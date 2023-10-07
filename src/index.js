const express = require("express");
const engine = require("ejs-locals");

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

// use ejs-locals for all ejs templates:
app.engine("ejs", engine);

app.set("views", __dirname + "./../views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Home Page" });
});

// 404 error route
app.use((req, res, next) => {
  res.status(404).render("404");
});

// start app
app.listen(HTTP_PORT, () => {
  console.log(`Server listening on:${HTTP_PORT}`);
});
