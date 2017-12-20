const Product = require('../models/product-model');

const recivedData = (req, res, err, data, next) => {
    if (err) return res.json(err);
    req.data = data;
    next();
}
const getAllCategories = (req, res, next) => {
    Category.find({}, (err, data) => recivedData(req, res, err, data, next));
}
const getSingleCategory = (req, res, next) => {
    Category.find({ _id: req.params.id })
        .populate('productList', 'name price imagePath')
        .exec((err, data) => recivedData(req, res, err, data, next));
}
const createNewCategory = (req, res, next) => {
    const { name, productList } = req.body;
    const newCategory = new Category({ name, productList });
    newCategory.save((err, data) => recivedData(req, res, err, data, next));
}
const updateCategory = (req, res, next) => {
    const { name, productList } = req.body;
    Category.update({ _id: req.params.id }, { name, productList }, (err, data) => recivedData(req, res, err, data, next));
}
const deleteCategory = (req, res, next) => {
    Category.remove({ _id: req.params.id }, (err, data) => recivedData(req, res, err, data, next));
}

module.exports = {
    getAllCategories,
    getSingleCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}
//--------how the json request should look like from the client-----
//     {
//     "name": "test",
//     "productList": ["5a3922f94f26b227c5c2755c"]
//     }