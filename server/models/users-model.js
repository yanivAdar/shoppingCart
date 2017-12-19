const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    last: String,
    email: String,
    idNumber: Number,
    password: String,
    city: String,
    street: String,
    role: String
})

const User = mongoose.model('User', UserSchema)
module.exports = User;