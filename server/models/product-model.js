const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    imagePath: String,
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;