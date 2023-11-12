const mongoose = require('mongoose')

const documentDetailSchema = new mongoose.Schema(
    {
        documentNumber: { 
            type: Number
        },
        type: { 
            type: String
        },
        submittedDate: { 
            type: Date
        },
        issuedDate: { 
            type: Date
        },
        expiryDate: { 
            type: Date
        },
        numberVouchers: { 
            type: Number
        },
        guaranteeValue: { 
            type: String
        },
        postage: { 
            type: Number 
        },
        trackingNumber: { 
            type: String
        },
        emailAddress:{
            type: String
        },
        status:{
            type:String,
            enum:[
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
            ],
            // default:'Application Received'  // default status
        }
    },
    { timestamps: true }
  )

  const DocumentDetail = mongoose.model('DocumentDetail',documentDetailSchema)
  module.exports =  DocumentDetail