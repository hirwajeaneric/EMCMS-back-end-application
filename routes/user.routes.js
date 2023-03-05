const express = require('express');
const router = express.Router();

const { testing, createUser, getUsers } = require('../controllers/user.controller');

router.route('/testing').get(testing);
router.route('/').get(getUsers).post(createUser);

module.exports = router;