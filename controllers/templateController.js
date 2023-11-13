const fs = require('fs');
const path = require('path');
const { prepareSuccessResponse } = require('../utils/responseHandler');
const templatesFolderPath = path.join(__dirname, '../templates');
const File = require('../models/file')

exports.getTemplate = async (req, res) => {
    const templateNumber = req.query.template

    const templateFileName = `template_${templateNumber}.xlsx`;
    const templateFilePath = path.join(templatesFolderPath, templateFileName);

    // Check if the file exists
    if (fs.existsSync(templateFilePath)) {
        // Send the file in the response

        return res.sendFile(templateFilePath)
    }

    // If the file doesn't exist, send a 404 Not Found response
    res.status(404).json(prepareSuccessResponse(null, 'Template not found'));
}

exports.addTemplate = async (req, res) => {
    const { file } = req

    const { filename } = file

    const newFile = await File.create({
        filename
    })

    res.status(200).json(prepareSuccessResponse(newFile, 'File uploaded successfully.'))
}