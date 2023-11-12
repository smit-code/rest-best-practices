const express = require('express')
const router = express.Router()

const { addDocumentDetail, allDocumentsDetails,documentsDetailsById,updateDocumentDetail,removeDocumentDetail } = require('../controllers/documentDetailController')
const Validator = require('../utils/validateRequest')

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

router.get('/', use(allDocumentsDetails))
router.post('/', Validator('addDocumentDetail'), use(addDocumentDetail))
router.get('/:id', use(documentsDetailsById))
router.put('/:id', Validator('addDocumentDetail'), use(updateDocumentDetail))
router.delete('/:id', use(removeDocumentDetail))

module.exports = router
