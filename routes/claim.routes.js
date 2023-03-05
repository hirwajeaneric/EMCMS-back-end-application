const express = require('express');
const router = express.Router();

const { testing, createClaim, getClaims } = require('../controllers/claim.controllers');

router.route('/testing').get(testing);
router.route('/').get(getClaims).post(createClaim);

module.exports = router;