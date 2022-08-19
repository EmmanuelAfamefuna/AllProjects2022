const express = require("express");
const app = express();

const mongoose = require('mongoose');
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./services/mongoConnection")();

const UserModel = require("./models/User");

app.use(
  require("express-session")({
    secret: "kittykat", // used to encrypt the user info before saving to db
    resave: false, // save the session obj even if not changed
    saveUninitialized: false, // save the session obj even if not initialized
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/newsfeed", isLoggedIn, (req, res) => {
  res.render("newsfeed.ejs");
});

app.get('/doggy', isLoggedIn, (req, res)=>{
  res.send("Yeah, doggies")
})

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", function (req, res) {
  let newUser = new UserModel({ username: req.body.username });
  UserModel.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render("signup.ejs");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/newsfeed");
      });
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/newsfeed",
    failureRedirect: "/login",
  }),
  function (req, res) {
    // We don't need anything in our callback function
  }
);

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Passport app on port ${PORT}`));