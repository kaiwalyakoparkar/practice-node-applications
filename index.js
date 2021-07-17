const express = require('express');
const app = express();
const env = require('dotenv').config();
const path = require('path');
var exphbs  = require('express-handlebars');

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/nl', require(path.join(__dirname, './routes/server.js')));

app.listen(port, () => {
    console.log(`Server started successfully on http://localhost:${port}/nl/home`);
});