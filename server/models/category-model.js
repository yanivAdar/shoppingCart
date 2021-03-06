const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    productList: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
