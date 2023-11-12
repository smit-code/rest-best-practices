const Joi = require('joi');

const addDocumentDetailSchema = Joi.object({
  documentNumber: Joi.string().trim().required().messages({
    'string.empty': 'Document number is required.',
    'any.required': 'Document number is required.',
  }),
  type: Joi.string().trim().required().messages({
    'string.empty': 'Type is required.',
    'any.required': 'Type is required.',
  }),
  submittedDate: Joi.date().required().max('now').messages({
    'any.required': 'Submitted date is required.',
    'date.max': 'Submitted date cannot be in the future.',
  }),
  issuedDate: Joi.date().required().max('now').messages({
    'any.required': 'Issued date is required.',
    'date.max': 'Issued date cannot be in the future.',
  }),
  expiryDate: Joi.date().required().min('now').messages({
    'any.required': 'Expiry date is required.',
    'date.min': 'Expiry date cannot be in the past.',
  }),
  numberVouchers: Joi.string().trim().required().messages({
    'string.empty': 'Number of vouchers is required.',
    'any.required': 'Number of vouchers is required.',
  }),
  guaranteeValue: Joi.string().trim().required().messages({
    'string.empty': 'Guarantee value is required.',
    'any.required': 'Guarantee value is required.',
  }),
  postage: Joi.string().trim().required().messages({
    'string.empty': 'Postage is required.',
    'any.required': 'Postage is required.',
  }),
  trackingNumber: Joi.string().trim().required().messages({
    'string.empty': 'Tracking number is required.',
    'any.required': 'Tracking number is required.',
  }),
  emailAddress: Joi.string().trim().email().required().messages({
    'string.empty': 'Email address is required.',
    'any.required': 'Email address is required.',
    'string.email': 'Email address must be a valid email.',
  }),
  status: Joi.string().trim().required().messages({
    'string.empty': 'Status is required.',
    'any.required': 'Status is required.',
  }),
});

module.exports = addDocumentDetailSchema;