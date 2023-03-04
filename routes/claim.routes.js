const express = require('express');
const router = express.Router();

const { testing } = require('../controllers/claim.controllers');

router.route('/testing').get(testing);

module.exports = router;