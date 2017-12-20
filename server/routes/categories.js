const express = require('express');
const router = express.Router();
const categoriesMiddlewares = require('../dal/categoriesMiddlewares');

router.get('/', categoriesMiddlewares.getAllCategories, (req, res) => res.json(req.data));

router.get('/:id', categoriesMiddlewares.getSingleCategory, (req, res) => res.json(req.data));

router.put('/', categoriesMiddlewares.createNewCategory, (req, res) => res.json(req.data));

router.patch('/:id', categoriesMiddlewares.updateCategory, (req, res) => res.json({ success: true }));

router.delete('/:id', categoriesMiddlewares.deleteCategory, (req, res) => res.json({ success: true }));

module.exports = router;