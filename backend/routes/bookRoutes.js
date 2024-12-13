const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route to get all books
router.get('/', bookController.getBooks);
router.post('/', bookController.addBook);

module.exports = router;
