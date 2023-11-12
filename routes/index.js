const express = require('express')
const router = express.Router()

const documentDetails = require('./documentDetailsRoute')

router.use('/document-details', documentDetails)

module.exports = router
