const express = require('express');
const router = express.Router();
const usersMiddelwares = require('../dal/usersMiddlewares');

router.get('/cart/:id', usersMiddelwares.getSingleUserCart, (req, res) => res.json(req.data));

router.get('/:id', usersMiddelwares.getSingleUser, (req, res) => res.json(req.data));

router.put('/', usersMiddelwares.createUser, (req, res) => res.json(req.data));

router.put('/cart/:id', usersMiddelwares.updateCart, (req, res) => res.json(req.data))

router.post('/cart/:id', usersMiddelwares.updateCartItem, (req, res) => res.json(req.data))

router.post('/cart/delete/:id', usersMiddelwares.deleteCartItem, (req, res) => res.json(req.data))

router.post('/checkEmail', usersMiddelwares.checkEmail);

router.delete('/cart/deleteAll', usersMiddelwares.clearCart, (req, res) => res.status(200))



module.exports = router;