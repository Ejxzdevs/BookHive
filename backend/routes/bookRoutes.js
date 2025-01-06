const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route books
router.get('/', bookController.getBooks);
router.post('/add', upload.single('image_url'), bookController.addBook);
router.patch('/update/:id', upload.single('image_url'), bookController.updatebook);
router.delete('/delete/:id', bookController.deleteBook);

module.exports = router;
