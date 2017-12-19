const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    last: String,
    email: String,
    idNumber: Number,
    password: String,
    city: String,
    street: String,
    role: String
})

module.exports = User;