const DocumentDetail = require('../models/documentDetails')
const { prepareSuccessResponse } = require("../utils/responseHandler");

// ADD DOCUMENT DETAILS:-
exports.addDocumentDetail = async (req, res) => {
    const { documentNumber, type, submittedDate, issuedDate, expiryDate, numberVouchers, guaranteeValue, postage, trackingNumber, emailAddress, status } = req.body;

    const documentDetail = await DocumentDetail.create({
        documentNumber,
        type,
        submittedDate,
        issuedDate,
        expiryDate,
        numberVouchers,
        guaranteeValue,
        postage,
        trackingNumber,
        emailAddress,
        status
    })

    return res.status(201).json(
        prepareSuccessResponse(documentDetail, 'Document details added successfully.')
    )

}

// GET ALL DOCUMENT DETAILS:-
exports.allDocumentsDetails = async (req, res) => {
    const documentDetails = await DocumentDetail.find().lean()

    return res.status(200).json(
        prepareSuccessResponse(documentDetails, 'Document fetched successfully.')
    )

}

// GET DOCUMENT DETAILS BY ID:-
exports.documentsDetailsById = async (req, res) => {
    const _id = req.params.id;

    const documentDetail = await DocumentDetail.findById(_id).lean()

    if (!documentDetail) {
        const error = new Error('Document details not found.');
        error.statusCode = 404;
        throw error;
    }

    return res.status(200).json(
        prepareSuccessResponse(documentDetail, 'Document details fetched successfully.')
    )
}

exports.updateDocumentDetail = async (req, res) => {

    const {
        id: documentId,
        documentNumber,
        type,
        submittedDate,
        issuedDate,
        expiryDate,
        numberVouchers,
        guaranteeValue,
        postage,
        trackingNumber,
        emailAddress,
        status
    } = req.body

    const documentDetail = await DocumentDetail.findByIdAndUpdate(documentId, {
        documentNumber,
        type,
        submittedDate,
        issuedDate,
        expiryDate,
        numberVouchers,
        guaranteeValue,
        postage,
        trackingNumber,
        emailAddress,
        status
    })

    if (!documentDetail) {
        const error = new Error('Document details not found.');
        error.statusCode = 404;
        throw error
    }

    return res.status(200).json(
        prepareSuccessResponse(documentDetail, 'Document details updated successfully.')
    )

}

exports.removeDocumentDetail = async (req, res) => {
    const _id = req.params.id;
    const documentDetail = await DocumentDetail.findByIdAndDelete(_id)

    if (!documentDetail) {
        const error = new Error('Document details not found.')
        error.statusCode = 404
        throw error
    }

    return res.status(200).json(
        prepareSuccessResponse(null, 'Document deleted successfully.')
    )

}