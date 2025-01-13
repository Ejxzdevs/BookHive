const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Route for Report
router.get('/', reportController.getReports);
router.post('/add', reportController.addReport);

module.exports = router;
