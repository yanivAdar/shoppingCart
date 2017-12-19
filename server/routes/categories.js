const express = require('express');
const router = express.Router();
const categoriesMiddlewares = require('../dal/categoriesMiddlewares');

router.get('/', (req,res)=>{res.json({success: true})});
router.get('/:id', (req,res)=>{res.json(req.data)});
router.put('/' ,categoriesMiddlewares.createNewCategory, (req,res) => {res.json(req.data)});

module.exports = router;