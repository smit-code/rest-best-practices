const express = require('express')
const router = express.Router()

const { getTemplate } = require('../controllers/templateController')
const Validator = require('../utils/validateRequest')

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

router.get('/', use(getTemplate))

module.exports = router
