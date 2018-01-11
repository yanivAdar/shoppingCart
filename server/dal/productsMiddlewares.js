const Product = require('../models/product-model');
const Category = require('../models/category-model');

const recivedData = (req, res, err, data, next) => {
    if (err) return res.json(err);
    req.data = data;
    next();
}
const getAllProducts = (req, res, next) => {
    Product.find({}).populate('category', 'name')
        .exec((err, data) => recivedData(req, res, err, data, next));
}
const getSingleProduct = (req, res, next) => {
    Product.find({ _id: req.params.id }).populate('category', 'name')
        .exec((err, data) => recivedData(req, res, err, data, next));
}
const createNewProduct = (req, res, next) => {
    const { name, price, imagePath, category } = req.body
    const newProduct = new Product({ name, price, imagePath, category });
    newProduct.save((err, data) => recivedData(req, res, err, data, next));
}
const populateCategoryProduct = (req, res, next) => {
    Category.findByIdAndUpdate(req.data.category, { $push: { "productList": req.data._id } }, { new: true },
        (err, data) => recivedData(req, res, err, data, next));
}

const populateDefaultCategory = (req, res, next) => {
    console.log(req);
    
    Category.update({ name: 'General' }, { $push: { 'productList': req.data.productList[0] } }, { new: true },
        (err, data) => {
            if (err) return res.json(err);
            next();
        });
}

const updateProduct = (req, res, next) => {
    const { name, price, imagePath, category } = req.body;
    Product.update({ _id: req.params.id }, { name, price, imagePath, category },
        (err, data) => recivedData(req, res, err, data, next));
}
const deleteProduct = (req, res, next) => {
    Product.remove({ _id: req.params.id },
        (err, data) => recivedData(req, res, err, data, next));
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
    populateCategoryProduct,
    populateDefaultCategory
}