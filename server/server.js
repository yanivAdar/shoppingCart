const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const async = require('async');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportConfig = require('./authenticate/passport-conf');

const defaultBehavior = require('./dal/defaultSettings');

//----global variables----
const env = require("./env/development.env");

//----managing user authintication----
passport.use(new LocalStrategy(passportConfig.login));
passport.serializeUser(passportConfig.serializeUser);
passport.deserializeUser(passportConfig.deserializeUser);

//----routing----
const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');
const userRouter = require('./routes/users');

//----middlewares evry request passes though----
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());
server.use(cookieParser());
server.use(cors());
server.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    name: 'user_shopping_cookie',
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 5
    },
    store: new MongoStore({
        url: process.env.CONNECTION_STRING
    })
}));
server.use(passport.initialize());
server.use(passport.session());
//Point static path to dist
server.use(express.static(path.join(__dirname, './www')));


// ----temp login logout routes----
// server.post('/login',
//     passport.authenticate('local', {
//         successRedirect: '/welcome.html',
//         failureRedirect: '/login.html'
//     })
// )

server.post('/login',
    passport.authenticate('local',{
        successRedirect: (req, res) => res.send('ok')
    }) 
)

server.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login.html');
})
server.use('/', passportConfig.validatedUser);

//----middlewares for specific routed requests----
server.use('/products', productsRouter);
server.use('/categories', passportConfig.validatedUser, categoryRouter);
server.use('/users', userRouter);
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './www/index.html'));
});
//----connecting and default settings----
async.waterfall([
    callback => mongoose.connect(process.env.CONNECTION_STRING, { useMongoClient: true }, err => callback(err)),
    callback => server.listen(process.env.PORT, err => callback(err)),
    callback => defaultBehavior.createDefaultCategories(err => callback(err))
], (err, results) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server up and running on port ${process.env.PORT} and connected to mongo DB`);
});
