const Category = require('../models/category-model');


const createDefaultCategories = (cb) => {
    Category.find({ name: 'General' }, (err, data) => {
        if (!data.length) {
            const defaultCategory = new Category({ name: 'General' });
            defaultCategory.save((err, data) => {
                if (err) throw error;
                console.log(data);
            })
        }
    });
    cb()
}

module.exports = {
    createDefaultCategories
}
