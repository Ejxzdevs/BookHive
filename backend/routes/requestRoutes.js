const express = require('express')
const router = express.Router()
const requestController = require('../controllers/requestController')

router.get('/', requestController.getRequests)
router.post('/add', requestController.addRequest)
router.patch('/update/:id', requestController.updateRequest);
router.delete('/delete/:id', requestController.deleteRequest);

module.exports = router;