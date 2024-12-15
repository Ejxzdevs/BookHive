const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

// Route to get all books
router.get('/', bookController.getBooks);
router.post('/add', bookController.addBook);

module.exports = router;
