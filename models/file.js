const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema(
    {
        user: { 
            type: String
        },
        fileName: { 
            type: String
        },
        fileUrl: { 
            type: String
        }
    },
    { timestamps: true }
  )

  const File = mongoose.model('File',fileSchema)
  module.exports =  File