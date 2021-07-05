const express  = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 3000;

app.use('/', require(path.join(__dirname, './routes/route')));

app.listen(port, ()=> {
    console.log(`Server started at http://localhost:${port}`);
});