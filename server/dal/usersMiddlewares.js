const User = require('../models/users-model');

const recivedData = (req, res, err, data, next) => {
    if (err) return res.json(err);
    req.data = data;
    next();
}

const updateCart = (req, res, next) => {
    User.findByIdAndUpdate({ _id: req.session.passport.user }, { $push: { "cart": req.body } }, { new: true },
        (err, data) => recivedData(req, res, err, data.cart, next));
}
const updateCartItem = (req, res, next) => {
    User.update({ _id: req.session.passport.user, "cart.name": { $eq: req.body.name } },
        { $set: { "cart.$.price": req.body.price, "cart.$.amount": req.body.amount } },
        (err, data) => recivedData(req, res, err, data.cart, next))
}
const deleteCartItem = (req, res, next) => {
    User.update({ _id: req.params.id }, { $pull: { cart: { name: req.body.name } } },
        (err, data) => recivedData(req, res, err, data.cart, next))
}
const getSingleUserCart = (req, res, next) => {
    User.find({ _id: req.params.id }, (err, data) => recivedData(req, res, err, data[0].cart, next));
}
const getSingleUser = (req, res, next) => {
    User.find({ _id: req.session.passport.user }, (err, data) => recivedData(req, res, err, data, next));
}
const createUser = (req, res, next) => {
    const { name, last, email, idNumber, password, city, street } = req.body;
    const cart = [];
    const newUser = new User({ name, last, email, idNumber, password, city, street, role: 'customer', cart }, );
    newUser.save((err, data) => recivedData(req, res, err, data, next));
}
const checkEmail = (req, res) => {
    User.find({ email: req.body.email }, (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) res.json('Email is taken');
        else res.json('Email is good');
    })
}
const clearCart = (req, res, next) => {
    User.update({ _id: req.session.passport.user }, { cart: [] },
        (err, data) => recivedData(req, res, err, data, next))
}

module.exports = {
    getSingleUserCart,
    createUser,
    checkEmail,
    updateCart,
    updateCartItem,
    deleteCartItem,
    getSingleUser,
    clearCart
}