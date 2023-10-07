const express = require("express");
const engine = require("ejs-locals");
const bodyParser = require("body-parser");

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

app.use(express.static("public"));
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post("/submit", (req, res) => {
  // Capture form data
  const { firstName, lastName, contactNumber, email, message } = req.body;

  console.log("You entered the following: ");
  console.log("Full name: ", firstName + " " + lastName);
  console.log("Contact Number; ", contactNumber);
  console.log("Email: ", email);
  console.log("Message:", message);
  // Redirect back to the home page
  res.redirect("/");
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
