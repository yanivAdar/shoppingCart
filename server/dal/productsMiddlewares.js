const Product = require('../models/product-model');
const Category = require('../models/category-model');

const createNewProduct = (req, res, next) => {
    console.log(req.body);
    const { name, price, imagePath, category } = req.body
    const newProduct = new Product({ name, price, imagePath, category });
    newProduct.save((err,data) => {
        if(err){
            res.json(err);
        }
        req.data = data;
        next();
    })
}

module.exports = {
    createNewProduct
}