const express = require('express')
const router = express.Router()

const documentDetail = require('./documentDetail/index')

router.use('/document-detail',documentDetail)

module.exports = router
