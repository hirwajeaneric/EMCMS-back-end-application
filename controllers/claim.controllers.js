const ClaimModel = require('../models/claim.model');
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-errors')

const testing = asyncWrapper(async (req, res) => {
    const claims = await ClaimModel.find({});
    res.status(200).json({ nbHits: claims.length, claims })
});

const createClaim = asyncWrapper(async (req, res) => {
    const claim = await ClaimModel.create(req.body);
    res.status(201).json({ message: 'Exam makeup claim initiated', payload: claim })
});

const getClaims = asyncWrapper(async(req, res, next) => {

});

const findById = asyncWrapper(async(req, res, next) => {
    
});

const findByRegistrationNumber = asyncWrapper(async(req, res, next) => {
    
});

const findByFaculty = asyncWrapper(async(req, res, next) => {
    
});

const findByDepartment = asyncWrapper(async(req, res, next) => {
    
});

const findByCourse = asyncWrapper(async(req, res, next) => {
    
});

const deleteClaims = asyncWrapper(async(req, res, next) => {
    
});

const updateClaims = asyncWrapper(async(req, res, next) => {
    
});

module.exports = { testing }