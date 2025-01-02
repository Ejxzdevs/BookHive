const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for User
router.post('/login', userController.getUser);

module.exports = router;
