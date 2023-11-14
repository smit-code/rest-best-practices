const fs = require('fs');
const path = require('path');
const { prepareSuccessResponse } = require('../utils/responseHandler');
const templatesFolderPath = path.join(__dirname, '../templates');
const userFilePath = path.join(__dirname, '../userTemplates');
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

exports.addFile = async (req, res) => {
    const { file } = req
    const user = ''
    const { filename } = file

    const newFile = await File.create({
        filename,
        user
    })

    res.status(200).json(prepareSuccessResponse(newFile, 'File uploaded successfully.'))
}

exports.getAllUserFiles = async (req, res) => {

    const files = await File.find()

    res.status(200).json(prepareSuccessResponse(files, 'File uploaded successfully.'))
}

exports.getUserFile = async (req, res) => {
    const user = req.user
    const filename = req.query.file

    const file = await File.findOne({ filename })

    if(!file) {
       return res.status(404).send('File not found');
    }

    const templateFilePath = path.join(userFilePath, filename);

    // Check if the file exists
    if (fs.existsSync(templateFilePath)) {
        // Send the file in the response

        return res.sendFile(templateFilePath)
    }

    // If the file doesn't exist, send a 404 Not Found response
    res.status(404).json(prepareSuccessResponse(null, 'Template not found'));
}