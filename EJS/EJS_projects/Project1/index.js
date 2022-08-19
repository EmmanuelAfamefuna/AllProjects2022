const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("/home");
  });


app.get('/home', function(req, res) {
     res.render("home", {pizza: "I like my pizza with extra pineapple"});
});


app.get('/about', function(req, res) {
     res.render("about", {cappuccino: "I like my cappuccino to be sweet."});
});


app.get('/contact', function(req, res) {
     res.render("contact", {fries: "I like my fries crispy with extra salt"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Intro to EJS on port ${PORT}`));