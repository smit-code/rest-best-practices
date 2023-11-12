const express = require('express')
const router = express.Router()

const documentDetails = require('./documentDetailsRoute')
const templateRoute = require('./templateRoute')

router.use('/document-details', documentDetails)
router.use('/templates', templateRoute)

module.exports = router
