const express = require('express');
const app = express();

 const logger = require('morgan')
const chalk = require('chalk')

app.use(logger('dev'))

let fruits = ['banana', 'cherries', 'limes', 'lemons'];

app.get('/', (req, res)=> {
  res.send('I am the root route');
})

app.get('/veggies', (req, res)=> {
  res.send('I am the veggies route');
})

app.get('/fruit', (req, res)=> {
  res.send('I am the fruit route');
})

app.get('/fruit/cherry', (req, res)=> {
  res.send('I am the cherry in the fruit route');
})

app.get('/fruits', (req, res)=> {
  res.send(fruits);
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(chalk.green(`App listening on port ${port}`)))