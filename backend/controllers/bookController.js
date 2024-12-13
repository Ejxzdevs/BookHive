const BookModel = require('../models/bookModel');

// GET ALL BOOKS
const getBooks = (req, res) => {
    BookModel.getAllBooks((err, data) => 
      err ? res.status(500).json({ error: err.message }) : res.json(data)
    );
  };

// ADD NEW BOOK
const addBook = (req, res) => {
  const { book_title, book_description } = req.body;
  const newBook = { book_title, book_description };

  BookModel.insertBook(newBook, (err, result) => 
    err ? res.status(500).json({ error: err.message }) : res.status(201).json({ message: 'Book added successfully', result })
  );
};

module.exports = { getBooks, addBook };
