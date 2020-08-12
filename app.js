const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./Routes/index');

const app = express();

// View Engine 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/Views');
app.set('layout', 'Layouts/layout');

app.use(expressLayouts);

// Static files
app.use(express.static('Public'));

// Routes
app.use('/', indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));