const UserModel = require('../models/user.model');
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-errors')

const testing = asyncWrapper(async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json({ nbHits: users.length, users })
});

const signIn = asyncWrapper(async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json({ message: 'User recorded', payload: user })
});

const signUp = asyncWrapper(async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json({ message: 'User recorded', payload: user })
});

const createUser = asyncWrapper(async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json({ message: 'Exam makeup user initiated', payload: user })
});

const getUsers = asyncWrapper(async(req, res, next) => {
    const users = await UserModel.find({})
    res.status(200).json({ nbHits: users.length, users })
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

const deleteUsers = asyncWrapper(async(req, res, next) => {
    
});

const updateUsers = asyncWrapper(async(req, res, next) => {
    
});

module.exports = { 
    testing, 
    createUser, 
    signIn,
    signUp,
    getUsers, 
}