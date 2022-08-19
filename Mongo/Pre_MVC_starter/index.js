require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Connection
const mongoose = require("mongoose");
const { DB, URI } = process.env;

let url = `${URI}/${DB}`;
let connectionObject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "acc",
  pass: "acc_rocks_2020",
};

mongoose
  .connect(url, connectionObject)
  .then(() => {
    console.log(`Connected to the ${DB} database`);
  })
  .catch((err) =>
    console.log(`Issues connecting to the ${DB} database: `, err)
  );


  // BLUEPRINTS
  // Shema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Must have a title']
  },
  author: {
    type: String,
    default: 'Anonymous'
  },

  isbn: {
    type: String,
    required: [true, 'Must have an ISBN'],
    minLength: [10, 'ISBN must be at least 10 digits'],
    maxLength: [13, 'ISBN must be less than 13 digits']
  },
});


// Model
const BookModel = new mongoose.model('books', bookSchema)



app.get('/', (req, res)=>res.render('home.ejs'));
app.get('/create', (req, res) =>res.render('createBooks.ejs'));

app.post('/create/books', (req, res) => {
  //let {author, title, isbn} = req.body
  let book = new BookModel({
    title: req.body.title,
    author: req.body.author ? req.body.author : undefined,
    isbn: req.body.isbn ? req.body.isbn: undefined
  })
  book.save((err, data) => {
    //distructured code
    //res.render('results.ejs', {message: err ? err.message : data});
     if(err) res.render('results.ejs', {message: err.message})
    else res.render('results.ejs', {message: data})
   });
});


app.get('/read', (req, res)=> {
  BookModel.find({}, (err, books) => {
    if(err) res.render('results.ejs', {message: err.message})
    else res.render('readBooks.ejs', {books: bookArray});
  })
  res.render('readBooks.ejs')
})
app.get('/update', (req, res)=>res.render('updateBooks.ejs'))
app.get('/delete', (req, res)=>res.render('deleteBooks.ejs'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Book app on port ${PORT}`));  