const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema(
    {
        user: { 
            type: String
        },
        alt: { 
            type: String
        },
        fileUrl: { 
            type: String
        }
    },
    { timestamps: true }
  )

  const File = mongoose.model( 'File', fileSchema )
  module.exports =  File