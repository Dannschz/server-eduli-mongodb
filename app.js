const express = require('express');

const app = express();
const routes = require('./routes/index');
require('dotenv').config();
require('./database/database.js');

app.use(express.json());

app.use('/', routes);

app.set('port', '4000');

app.listen(app.get('port'), () => {
  console.log(`App listen on port ${app.get('port')}`);
});
