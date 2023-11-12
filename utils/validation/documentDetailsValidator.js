const Joi = require('joi');

const documentDetailsSchema = Joi.object({
  documentNumber: Joi.string().required().messages({
    'string.base': 'Document Number should be a type of string.',
    'any.required': 'Document Number is required.'
  }),
  type: Joi.string().required().messages({
    'string.base': 'Type should be of type string.',
    'any.required': 'Type is required.'
  }),
  submittedDate: Joi.date().required().messages({
    'date.base': 'Submitted Date should be a valid date.',
    'date.format': 'Submitted Date should be in ISO date format (YYYY-MM-DD).',
    'any.required': 'Submitted Date is required.'
  }),
  issuedDate: Joi.date().required().messages({
    'date.base': 'Issued Date should be a valid date.',
    'date.format': 'Issued Date should be in ISO date format (YYYY-MM-DD).',
    'any.required': 'Issued Date is required.'
  }),
  expiryDate: Joi.date().required().messages({
    'date.base': 'Expiry Date should be a valid date.',
    'date.format': 'Expiry Date should be in ISO date format (YYYY-MM-DD).',
    'any.required': 'Expiry Date is required.'
  }),
  numberVouchers: Joi.number().required().messages({
    'number.base': 'Number Vouchers should be a valid number.',
    'any.required': 'Number Vouchers is required.'
  }),
  guaranteeValue: Joi.number().required().messages({
    'number.base': 'Guarantee Value should be a valid number.',
    'any.required': 'Guarantee Value is required.'
  }),
  postage: Joi.number().required().messages({
    'number.base': 'Postage should be a valid number.',
    'any.required': 'Postage is required.'
  }),
  trackingNumber: Joi.string().required().messages({
    'string.base': 'Tracking Number should be a type of string.',
    'any.required': 'Tracking Number is required.'
  }),
  emailAddress: Joi.string().email().required().messages({
    'string.base': 'Email Address should be a type of string.',
    'string.email': 'Invalid email address.',
    'any.required': 'Email Address is required.'
  }),
  status: Joi.string().valid(
    'Application Received',
    'Application Rejected',
    'Application In Progress',
    'Application Completed',
    'Awaiting Liability Guarantee',
    'Documents in Transit',
    'Documents ready to collect (express only)',
    'Issued',
    'Complete for EUR1/COO',
    'Surrendered documents received',
    'Surrender checks in progress',
    'Surrender accepted – Guarantee refund in progress',
    'Surrender complete'
  ).required().messages({
    'string.base': 'Status should be a type of string.',
    'any.only': 'Invalid Status value.',
    'any.required': 'Status is required.'
  }),
});

module.exports = documentDetailsSchema;