const {BookModel}  = require("../models/bookModels");

exports.displayCreatePage = (req, res) => res.render("createBooks.ejs");

exports.createBook = (req, res) => {
  let { author, title, isbn } = req.body;
  let book = new BookModel({
    title: title,
    author: author ? author : undefined,
    isbn: isbn,
  });
  book.save((err, data) => {
    res.render("results.ejs", { message: err ? err.message : data });
  });
};