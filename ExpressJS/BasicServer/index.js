//Foundation
const express = require("express")
const app = express();
//console.log(app)


//Route handler
app.get('/', (req, res)=> {
    res.send("My first server response")
});

//The listner
const PORT = process.env.PORT || 3000;
app.listen(3000, ()=>console.log(`App listening on port ${PORT}`));






