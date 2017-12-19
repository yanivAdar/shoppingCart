const Product = require('../models/product-model');
const Category = require('../models/category-model');

const createNewCategory = (req, res, next) => {
    console.log(req.body);
    if (!(req.body.productList instanceof Array)) {
        console.log("not an array");
    }
    const { name, productList } = req.body
    const newCategory = new Category({ name, productList });
    newCategory.save((err, data) => {
        if (err) {
            res.json(err);
        }
        req.data = data;
        next();
    })
}

module.exports = {
    createNewCategory
}