const express = require("express");
const engine = require("ejs-locals");

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

// use ejs-locals for all ejs templates:
app.engine("ejs", engine);

app.set("views", __dirname + "./../views");
app.set("view engine", "ejs");

// home page
app.get("/", (req, res) => {
  res.render("pages/index", { title: "Home Page" });
});
// about page
app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Page" });
});

// contact page
app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact Page" });
});

// services
app.get("/services", (req, res) => {
  res.render("pages/services", { title: "Services Page" });
});

app.get("/projects", (req, res) => {
  res.render("pages/projects", { title: "Projects Page" });
});
// 404 error route
app.use((req, res, next) => {
  res.status(404).render("pages/not-found",{title:"Not Found"});
});

// start app
app.listen(HTTP_PORT, () => {
  console.log(`Server listening on:${HTTP_PORT}`);
});
