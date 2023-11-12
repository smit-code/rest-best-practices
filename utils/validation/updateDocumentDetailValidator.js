const Joi = require('joi');

const updateDocumentDetailSchema = Joi.object({
  documentNumber: Joi.string().trim().required().messages({
    'string.empty': 'Document number is required.',
  }),
  type: Joi.string().trim().required().messages({
    'string.empty': 'Type is required.',
  }),
  submittedDate: Joi.date().required().max('now').messages({
    'date.max': 'Submitted date cannot be in the future.',
  }),
  issuedDate: Joi.date().required().max('now').messages({
    'date.max': 'Issued date cannot be in the future.',
  }),
  expiryDate: Joi.date().required().min('now').messages({
    'date.min': 'Expiry date cannot be in the past.',
  }),
  numberVouchers: Joi.string().trim().required().messages({
    'string.empty': 'Number of vouchers is required.',
  }),
  guaranteeValue: Joi.string().trim().required().messages({
    'string.empty': 'Guarantee value is required.',
  }),
  postage: Joi.string().trim().required().messages({
    'string.empty': 'Postage is required.',
  }),
  trackingNumber: Joi.string().trim().required().messages({
    'string.empty': 'Tracking number is required.',
  }),
  emailAddress: Joi.string().trim().email().required().messages({
    'string.empty': 'Email address is required.',
    'string.email': 'Email address must be a valid email.',
  }),
  status: Joi.string().trim().required().messages({
    'string.empty': 'Status is required.',
  }),
});

module.exports = updateDocumentDetailSchema;