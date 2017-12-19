const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    price: Number,
    imagePath: String,
    category: [{type: Schema.Types.ObjectId, ref: 'Category'}]
})

module.exports = Product;