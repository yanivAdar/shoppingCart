const express = require('express');
const router = express.Router();
const productsMiddlewares = require('../dal/productsMiddlewares');

router.get('/', productsMiddlewares.getAllProducts, (req, res) => res.json(req.data));

router.get('/:id', productsMiddlewares.getSingleProduct, (req, res) => { res.json(req.data) });

router.put('/', productsMiddlewares.createNewProduct, productsMiddlewares.populateCategoryProduct, (req, res) => { res.json(req.data) });

router.patch('/:id', productsMiddlewares.updateProduct, (req,res)=> res.json({success: true}));

router.delete('/:id', productsMiddlewares.deleteProduct, (req,res)=> res.json({success: true}));

module.exports = router;