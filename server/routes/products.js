const express = require('express');
const router = express.Router();
const productsMiddlewares = require('../dal/productsMiddlewares');

router.get('/', (req, res) => { res.json({ success: true }) });
router.get('/:id', (req, res) => { res.json(req.data) });
router.put('/', productsMiddlewares.createNewProduct, (req, res) => { res.json(req.data) });

module.exports = router;