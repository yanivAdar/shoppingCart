const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    name: String,
    productList: [{
        productId: {
            type: Number
        },
        retailPrice: {
            type: Number
        },
        manufaturer: {
            type: String
        }
    }]
})