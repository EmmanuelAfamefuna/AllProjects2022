/* const express = require("express");
const app = express();

// tell our app to use our logger
const logger = require("morgan");
app.use(logger("dev"));

// in order to save some typing, we are going to set our view engine
app.set("view engine", "ejs");

// tell the app to use the static files in express
app.use(express.static("public"))

const {zoo} = require('./fakeData')
console.log(zoo)

app.get("/", (req, res) => {
  // res.send("Groot route");
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", { data: zoo });
});

// build route handlers and test that they render
//     /about -> about page
//     /contact -> contact page
//     /petfriendly -> petfriendly page
app.get("/contact", (req, res) => {
  res.render("contact", { data: zoo });
});

app.get("/about", (req, res) => {
  res.render("about", {data: zoo});
});

app.get("/petfriendly", (req, res) => {
  res.render("petfriendly");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Zoo app on port ${PORT}`)); */



const express = require("express");
const app = express();

// tell our app to use our logger
const logger = require("morgan");
app.use(logger("dev"));

// in order to save some typing, we are going to set our view engine
app.set("view engine", "ejs");

// tell the app to use the static files in express
app.use(express.static("public"))

const {zoo} = require('./fakeData')
console.log(zoo)

app.get("/", (req, res) => {
  // res.send("Groot route");
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", { data: zoo });
});

// build route handlers and test that they render
//     /about -> about page
//     /contact -> contact page
//     /petfriendly -> petfriendly page
app.get("/contact", (req, res) => {
  res.render("contact", { data: zoo });
});

app.get("/about", (req, res) => {
  res.render("about", {data: zoo});
});

app.get("/petfriendly", (req, res) => {
  res.render("petfriendly");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Zoo app on port ${PORT}`));