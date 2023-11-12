const express = require('express')
const router = express.Router()

const { addDocumentDetail, allDocumentsDetails,documentsDetailsById,updateDocumentDetail,removeDocumentDetail } = require('../controllers/documentDetailController')
const Validator = require('../utils/validateRequest')

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

router.get('/', use(allDocumentsDetails))
router.post('/', Validator('documentDetails'), use(addDocumentDetail))
router.get('/:id', use(documentsDetailsById))
router.put('/:id', Validator('documentDetails'), use(updateDocumentDetail))
router.delete('/:id', use(removeDocumentDetail))

module.exports = router
