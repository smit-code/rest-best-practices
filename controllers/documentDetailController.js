const DocumentDetail = require('../models/documentDetail')
const { prepareSuccessResponse, prepareErrorResponse } = require("../utils/responseHandler");

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
        prepareSuccessResponse(documentDetail, 'document detail added.')
    )

}

// GET ALL DOCUMENT DETAILS:-
exports.allDocumentsDetails = async (req, res) => {
    try {
        const documentdetails = await DocumentDetail.find()

        return res.status(200).json(
            prepareSuccessResponse(documentdetails, 'fetch all documents.')
        )
    } catch (error) {
        return res.status(401).json(
            prepareErrorResponse(error)
        )
    }

}

// GET DOCUMENT DETAILS BY ID:-
exports.documentsDetailsById = async (req, res) => {
    const _id = req.params.id;

    const documentDetail = await DocumentDetail.findById(_id)

    if (!documentDetail) {
        const error = new Error('can not found document.');
        error.statusCode = 422;
        throw error;
    }

    return res.status(200).json(
        prepareSuccessResponse(documentDetail, 'document detail fetched.')
    )
}

exports.updateDocumentDetail = async (req, res) => {
    const _id = req.params.id
    const {
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

    try {
        const documentDetail = await DocumentDetail.findByIdAndUpdate(_id, {
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
            const error = new Error('can not found document detail.');
            error.statusCode = 401;
            throw error
        }

        return res.status(200).json(
            prepareSuccessResponse(documentDetail, 'document detail updated successfully.')
        )
    } catch (error) {
        return res.status(error.statusCode).json(
            prepareErrorResponse(error)
        )
    }
}

exports.removeDocumentDetail = async (req, res) => {
    const _id = req.params.id;
    try {
        const documentDetail = await DocumentDetail.findByIdAndDelete(_id)

        if (!documentDetail) {
            const error = new Error('document detail not found.')
            error.statusCode = 401
            throw error
        }

        return res.status(200).json(
            prepareSuccessResponse(documentDetail, 'document deleted successfully.')
        )
    } catch (error) {
        return res.status(error.statusCode).json(
            prepareErrorResponse(error)
        )
    }
}