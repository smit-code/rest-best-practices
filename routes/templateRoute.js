const express = require('express')
const router = express.Router()

const { getTemplate, addFile } = require('../controllers/templateController')
const { fileUpload } = require('../config/multer')

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

router.get('/', use(getTemplate))
router.post('/', fileUpload, use(addFile))

module.exports = router
