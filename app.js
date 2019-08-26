const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./helpers/database');

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }))
app.use(bodyParser.json({limit: '50mb', extended: true}))

db.connection();

const userRouter = require('./routes/user');

app.use('/api', userRouter);

module.exports = app;