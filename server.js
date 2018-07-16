const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
const registries = require('./routes/registriesRoutes');
const products = require('./routes/productsRoutes')
const notifications = require('./routes/notificationsRoutes')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/registries', registries);
app.use('/products', products);
app.use('/notifications', notifications)

app.listen(port, function() {
  console.log("listening on port: ", port);
})
