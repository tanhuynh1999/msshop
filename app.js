const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
// * link router
const homeRouter = require('./servers/routers/homeRoute');
const productRouter = require('./servers/routers/productRoute');
const app = express();
const port = 3000;

// * express-handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// * path
app.set('views', path.join(__dirname, '/clients/views'));
app.use(express.static(path.join(__dirname, 'clients/public')))
// * connect database


// * connect router
app.use('', homeRouter);
app.use('', productRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})