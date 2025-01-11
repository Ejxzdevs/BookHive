const NewsModel = require('../models/newsModel');

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
  addNews = async (req, res) => {
    const { news_title, news_content } = req.body;
    let image_url = (req.file && req.file.filename) ? `${req.file.filename}` : '';
    const newNews = { news_title, news_content, image_url };

    try {
      const result = await NewsModel.insertNews(newNews);
      res.status(201).json({ message: 'News added successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  // UPDATE BOOK
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

  // DELETE BOOK
  deleteBook = async (req , res) => {
    const book_id = req.params.id

    try {
      const result = await BookModel.deleteBook(book_id);
      res.status(200).json({ message: 'Book deleted successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

  }
}

module.exports = new BookController();
