const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

if (process.env.ENVIRONMENT == 'developement') {
	app.use(morgan('dev'));
}
app.use(express.json());

app.use(
	'/api/v1/blogs',
	require(path.join(__dirname, './routes/blogRoute.js'))
);

module.exports = app;
