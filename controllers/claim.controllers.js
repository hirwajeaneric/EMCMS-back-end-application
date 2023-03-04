const ClaimModel = require('../models/claim.modal.js');

const testing = async (req, res) => {
    const claims = await ClaimModel.find({});
    res.status(200).json({ nbHits: claims.length, claims })
}