const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Route for Report
router.get('/', reportController.getReports);
router.post('/add', reportController.addReport);
router.delete('/delete/:id', reportController.deleteReport);

module.exports = router;
