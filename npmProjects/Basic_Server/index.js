/* const express = require("express")
const app = express();

app.get('/', (req, res)=> {
    res.send("My first server")
});

const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>console.log(`App listening on port ${PORT}`)); */


/* const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("My second server");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>console.log(`App listening on port ${PORT}`)); */


 const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("I was able to build this without looking on my first and second attempt!");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>console.log(`App listening on port ${PORT}`)); 

