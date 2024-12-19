const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');

// Route for Inquiry
router.get('/', inquiryController.getInquiries);
router.post('/add', inquiryController.addInquiry);

module.exports = router;
