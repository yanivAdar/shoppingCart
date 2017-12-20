const User = require('../models/users-model');

const recivedData = (req, res, err, data, next) => {
    if (err) return res.json(err);
    req.data = data;
    next();
}

const getSingleUser = (req, res, next) => {
    User.find({ _id: req.params.id }, (err, data) => recivedData(req, res, err, data, next));
}
const createUser = (req, res, next) => {
    const { name, last, email, idNumber, password, city, street } = req.body;
    const newUser = new User({ name, last, email, idNumber, password, city, street, role: 'customer' });
    newUser.save((err, data) => recivedData(req, res, err, data, next));
}

module.exports = {
    getSingleUser,
    createUser
}