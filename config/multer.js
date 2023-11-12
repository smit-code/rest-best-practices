const multer = require('multer')
const path = require('path')
const { createNestedDir } = require("../helper/uploadHelper")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderPath = path.join(__dirname, '../userTemplates')
        createNestedDir(folderPath)
        cb(null,folderPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage }).single('file');

exports.fileDataUpload = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ error: err.message });
        } else if (err) {
            return res.status(500).json({ error: 'An error occurred while uploading.' });
        }
        next();
    });
};

