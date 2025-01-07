const express = require('express')
const router = express.Router()
const requestController = require('../controllers/requestController')

router.post('/add', requestController.addRequest)

module.exports = router;