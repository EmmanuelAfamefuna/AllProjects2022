//Build a basic server
const express = require("express")
const app = express();
const canine = require("canis-familiaris")

app.get('/', (req, res)=> {
    res.send("Welcome to Canine world!!!")
});

app.get("/breeds", (req, res) =>{
    res.send(canine.random(5));
});

let dogArr = []
app.get("/data", (req, res) =>{
  dogArr.push(canine.random());
  res.send("Random dog breed added to data array");
});

app.get("/showData", (req, res) => {
    res.send("show data route");
});


const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>console.log(`App listening on port ${PORT}`));