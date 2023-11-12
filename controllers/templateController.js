const fs = require('fs');
const path = require('path');
const { prepareSuccessResponse } = require('../utils/responseHandler');
const templatesFolderPath = path.join(__dirname, '../templates');

exports.getTemplate = async (req, res) => {
    const templateNumber = req.query.template

    const templateFileName = `template_${templateNumber}.txt`;
    const templateFilePath = path.join(templatesFolderPath, templateFileName);

    // Check if the file exists
    if (fs.existsSync(templateFilePath)) {
        // Send the file in the response

        return res.sendFile(templateFilePath)
    }

    // If the file doesn't exist, send a 404 Not Found response
    res.status(404).json(prepareSuccessResponse(null, 'Template not found'));
}