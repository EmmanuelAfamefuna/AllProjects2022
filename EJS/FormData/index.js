const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const { people } = require("./helpers/fakedata");

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.get("/test", (req, res) => {
  res.send("I am the test route");
});

// app.get("/test/apple", (req, res) => {
//   res.send("I am the apple route");
// });

app.get("/test/:kittycat", (req, res) => {
  res.send(`I am the ${req.params.kittycat}`);
  // let page = `${req.params.kittycat}.ejs`
  // res.render(page)
});

app.get("/test/:kittycat/:doggy", (req, res) => {
  console.log(req);
  res.send(`I am the ${req.params.kittycat} with a ${req.params.doggy}`);
});

app.get("/test/:kittycat/money/:doggy", (req, res) => {
  console.log(req);
  res.send(
    `I am the ${req.params.kittycat} with a ${req.params.doggy} after the money`
  );
});

app.get("/getdata", (req, res) => {
  // console.log(req)
  // console.log(req.query.fname, req.query.lname)

  //  need to reference values using ->
  // let {fname, lname, age, isAlive} = req.query
  let tempPerson = {
    fname: req.query.fname || "We know its you Nelly!!!",
    lname: req.query.lname || "And we know you have a last name!!!",
    age: req.query.age || 999,
    isAlive: req.query.isAlive === "alive" ? true : false,
  };
  // need to push values to array
  people.push(tempPerson)
  res.render("results.ejs", { data: people });
});

app.get("/results", (req, res) => {
  res.render("results.ejs", { data: people });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Form app on port ${PORT}`));