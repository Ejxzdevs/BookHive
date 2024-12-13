const connect = require('../config/db');

// Get all books
const getAllBooks = (callback) => {
  const query = "SELECT * FROM BOOKS";
  connect.query(query, callback);
};

// Insert a new book
const insertBook = (book, callback) => {
  const query = "INSERT INTO BOOKS (book_title, book_description) VALUES (?)";
  const values = [book.book_title, book.book_description];
  connect.query(query, [values], callback);
};

module.exports = { getAllBooks, insertBook };
