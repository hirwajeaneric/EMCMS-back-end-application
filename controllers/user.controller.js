const UserModel = require('../models/user.model');
const asyncWrapper = require('../middlewares/async');
const { NotFoundError } = require('../errors')

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
    const userId = req.query.id;
    const user = await UserModel.findById(userId)

    if (!user || user === null ) {
        throw new NotFoundError(`No user with ID: ${userId} found!`);
    }

    res.status(200).json({ user });
});

const findByRegistrationNumber = asyncWrapper(async(req, res, next) => {
    const regNo = req.query.registrationNumber;
    const user = await UserModel.find({ registrationNumber: regNo })
    
    if (!user || user.length === 0 ) {
        throw new NotFoundError(`No user with registration number: ${regNo}`);
    }
    
    res.status(200).json({ user });
});

const deleteUser = asyncWrapper(async(req, res, next) => {
    
});

const updateUser = asyncWrapper(async(req, res, next) => {
    
});

module.exports = { testing, createUser, signIn, signUp, getUsers, findById, findByRegistrationNumber, deleteUser, updateUser }
