 const express =require('express');
const app = express();

const Pokemon =require('pokemon')
console.log(app);

app.get('/', (req, res) => {
    res.send('Welcome to the pokemon route!!!');
});

app.get('/pokemon', (req, res) => {
    res.send(Pokemon.random());
});

app.get('/dex', (req, res) => {
    res.send(Pokemon.five());
});

app.get('/pokemon/dex', (req, res) => {
    res.send(ThePokeman());
});

app.get('/battle', (req, res) => {
    res.send('Call me Pokemon');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));