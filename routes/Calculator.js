const indexController = require('../app/controller/IndexController')
const express = require('express')
const router = express.Router()

router.get('/calc', indexController.connect)
router.post('/calc', indexController.getNumber)

module.exports = router