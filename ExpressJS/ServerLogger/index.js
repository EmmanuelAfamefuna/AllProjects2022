 //Foundation
const express = require("express")
const app = express();
//console.log(app)

 const logger = require("morgan")
 const chalk = require("chalk");
const { Route } = require("express");


app.use(logger("dev"))

//Route handler
 app.get("/", (req, res) => {
     console.log(chalk.red("This is the root route!!!"))
    res.send("Welcome to the Root Route!!");
});

app.get("/dog", (req, res) => {
    console.log(chalk.red.bgGreenBright("This is the dog route!!!"))
    res.send("Welcome to the Root Route!!!");
});

app.get("/cat", (req, res) => {
    console.log(chalk.red.bgGreenBright("This is the cat route!!!"))
    res.send("Welcome to the Root Route!!!");
});

app.get("/numbers", (req, res) => {
    //send back a random number 1-100
    console.log(chalk.red.bgGreenBright("This is the number route!!!"))
    res.send("Welcome to the Root Route!!!")
});

/* app.get("*", (req, res) =>{
    res.send("Sorry this is not route you are looking for!!!")
}); */

//The listner
const port = process.env.PORT || 3000;
app.listen(PORT, () => console.log(chalk.green(`App on port ${PORT}`)));