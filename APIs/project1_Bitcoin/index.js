const express = require('express');
const app = express();
const needle = require('needle');

//css connection
app.use(express.static('public'));

app.set('view engine', 'ejs');

//route handlers
app.get('/', (req, res) =>{
     res.render('home', {data: "", currency: ""});
});

app.get('/getPrice', (req, res) =>{

  needle.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(error, response, body){
    let data = JSON.parse(body)
    let choice = req.query.price || 'USD'
    if(!error && response.statusCode == 200)
    console.log(data)

    let rate = data.bpi[choice].rate_float.toFixed(2)
    let symbol = data.bpi[choice].symbol

    res.render('home', {data: rate, currency: symbol});
    
  });
});

// The listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bitcoin app on port ${PORT}`));


