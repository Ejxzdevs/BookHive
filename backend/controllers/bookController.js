const BookModel = require('../models/bookModel');

class BookController {
  // GET ALL BOOKS
  getBooks = async (req, res) => {
    try {
      const data = await BookModel.getAllBooks();
      res.json(data); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // ADD NEW BOOK
  addBook = async (req, res) => {
    const { book_title, book_description } = req.body;
    const newBook = { book_title, book_description };

    try {
      const result = await BookModel.insertBook(newBook);
      res.status(201).json({ message: 'Book added successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = new BookController();
