const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    const data = [
        {name: "Jim", message: "Hi, how are you?"},
        {name: "Jane", message: "How about pasta for dinner?"},
        {name: "Gary", message: "I like my pasta with butter"}
     ]
    res.render("messages", {data: data});
 });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Passing Data on port ${PORT}`));