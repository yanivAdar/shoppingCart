const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const async = require('async');
const mongoose = require('mongoose');
const cors = require('cors');

const env = require("./env/development.env");

const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');
const userRouter = require('./routes/users');

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());
server.use(cors());

server.use('/products', productsRouter);
server.use('/categories', categoryRouter);
server.use('/users', userRouter);


async.waterfall([
    callback => mongoose.connect(process.env.CONNECTION_STRING, { useMongoClient: true }, err => callback(err)),
    callback => server.listen(process.env.PORT, err => callback(err))
], (err, results) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server up and running on port ${process.env.PORT} and connected to mongo DB`);
});
