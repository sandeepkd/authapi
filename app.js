const express = require('express');
const app = express();
const userRouter = require('./routes/user');

app.use('/api', userRouter);

module.exports = app;