const express = require('express');
const router = express.Router();
const usersMiddelwares = require('../dal/usersMiddlewares');

router.get('/cart/:id', usersMiddelwares.getSingleUserCart, (req, res) => res.json(req.data));

router.put('/', usersMiddelwares.createUser, (req, res) => res.json(req.data));

router.put('/cart/:id', usersMiddelwares.updateCart, (req, res) => res.json(req.data))

router.post('/cart/:id', usersMiddelwares.updateCartItem, (req, res) => res.json(req.data))

router.post('/checkEmail', usersMiddelwares.checkEmail);



module.exports = router;