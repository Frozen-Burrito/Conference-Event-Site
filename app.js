const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const indexRouter = require('./Routes/index');
const speakerRouter = require('./Routes/speakers');
const eventRouter = require('./Routes/events');

const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: './.env' });
}

// View Engine 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/Views');
app.set('layout', 'Layouts/layout');

app.use(expressLayouts);

// Static files
app.use(express.static('Public'));

// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Connect DB
mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.use('/', indexRouter);
app.use('/speakers', speakerRouter);
app.use('/events', eventRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));