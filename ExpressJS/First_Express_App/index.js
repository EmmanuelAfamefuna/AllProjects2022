const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//Need a body parser
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('A get request was recieved')
    res.send('Hello World!')
});

app.get('/apple', (req, res) => {
    res.json('Hello to all the sweet Apples!')
});

//Post handler
app.post('/', (req, res) => {
    console.log('The request body is :', req.body)
    let myfriend = req.body;
    myfriend.timestamp = Data.now();
    res.jason(myfriend);
});

app.get('*', (req, res) => {
    res.send('Sorry, the page you\'re looking for doesn\'t exist.')
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
}); 
