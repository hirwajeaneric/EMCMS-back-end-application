const CourseModel = require('../models/course.model');
const asyncWrapper = require('../middlewares/async');

const testing = asyncWrapper(async (req, res) => {
    const courses = await CourseModel.find({});
    res.status(200).json({ nbHits: courses.length, courses })
});

const createCourse = asyncWrapper(async (req, res) => {
    const course = await CourseModel.create(req.body);
    res.status(201).json({ message: 'Course added', payload: course })
});

const getCourses = asyncWrapper(async(req, res, next) => {
    const courses = await CourseModel.find({})
    res.status(200).json({ nbHits: courses.length, courses })
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

const deleteCourses = asyncWrapper(async(req, res, next) => {
    
});

const updateCourses = asyncWrapper(async(req, res, next) => {
    
});

module.exports = { testing, createCourse, getCourses }