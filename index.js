const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const morgan = require('morgan');

if(process.env.ENVIRONMENT == 'developement'){
	app.use(morgan('dev'));
}

app.use('/api/v1/blogs', require(path.join(__dirname, './routes/blogRoute.js')));

module.exports = app;