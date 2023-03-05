const express = require('express');
const router = express.Router();

const { testing, createUser, getUsers, findById, signIn, signUp, findByRegistrationNumber, deleteUser, updateUser } = require('../controllers/user.controller');

router.route('/testing').get(testing);
router.route('/').get(getUsers).post(createUser);
router.route('/findById').get(findById);
router.route('/findByRegistrationNumber').get(findByRegistrationNumber);

module.exports = router;