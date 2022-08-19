const express = require("express")
const app = express();
const Quote = require('inspirational-quotes');

//logging tool


app.get("/", (req, res)=> {
    res.redirect("/getQuote")
});

app.get("/info", (req, res) => {
    res.send("I am the info route")
});

//When /getQuote is called,
//Send back one random quote
app.get("/getQuote", (req, res) => {
    let newQuote = Quote.getRandomQuote()
    res.send("newQuote");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));