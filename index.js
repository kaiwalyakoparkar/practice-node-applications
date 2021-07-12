const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');

const port = 3000;

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use('/', require(path.join(__dirname, './routes/server.js')));

app.listen(port, () => {
    console.log(`Server started at : http://localhost:${port}`);
});