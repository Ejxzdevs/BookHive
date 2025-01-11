const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
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

// Route News
router.post('/add', upload.single('image_url'), newsController.addNews);

module.exports = router;
