const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');

// Route for Inquiry
router.get('/', inquiryController.getInquiries);
router.post('/add', inquiryController.addInquiry);
router.patch('/update/:id', inquiryController.updateInquiryStatus);
router.delete('/delete/:id', inquiryController.deleteInquiry);

module.exports = router;
