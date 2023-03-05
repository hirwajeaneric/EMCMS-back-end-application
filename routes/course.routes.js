const express = require('express');
const router = express.Router();

const { testing, createCourse, getCourses } = require('../controllers/course.controller');

router.route('/testing').get(testing);
router.route('/').get(getCourses).post(createCourse);

module.exports = router;