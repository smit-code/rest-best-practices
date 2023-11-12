const express = require('express')
const router = express.Router()

const documentDetailsRoutes = require('../documentDetail/documentDetailRoute')

router.use('/', documentDetailsRoutes)

module.exports = router
