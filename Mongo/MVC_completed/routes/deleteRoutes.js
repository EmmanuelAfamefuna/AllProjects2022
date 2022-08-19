const express = require('express')
const router = express.Router()
const {displayDeletePage} = require('../controllers/deleteControllers')

router.get('/', displayDeletePage)

module.exports = router