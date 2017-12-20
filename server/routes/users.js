const express = require('express');
const router = express.Router();
const usersMiddelwares = require('../dal/usersMiddlewares');

router.get('/:id', usersMiddelwares.getSingleUser, (req, res) => res.json(req.data));
router.put('/', usersMiddelwares.createUser, (req, res) => res.json(req.data));

module.exports = router;