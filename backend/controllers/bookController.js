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
    const { book_title, book_description , genre , author } = req.body;
    let image_url = (req.file && req.file.filename) ? `${req.file.filename}` : '';
    const newBook = { book_title, book_description , genre ,author, image_url  };

    try {
      const result = await BookModel.insertBook(newBook);
      res.status(201).json({ message: 'Book added successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  updatebook = async (req , res) => {
    const { book_title, book_description , genre , author, } = req.body;
    let image_url = (req.file && req.file.filename) ? `${req.file.filename}` : '';
    const book_id = req.params.id
    const updateBook = {book_id, book_title, book_description , genre ,author ,image_url};
    
    try {
      const result = await BookModel.updateBook(updateBook);
      res.status(200).json({ message: 'Book updated successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new BookController();
