const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/about", (req, res) => {
    res.render("about");
});


app.get("/contact", (req, res) => {
    res.render("contact");
});


app.get("/home", (req, res) => {
    res.render("home");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Partial app on port ${PORT}`));
