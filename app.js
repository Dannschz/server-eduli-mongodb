const express = require('express');

const app = express();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const routes = require('./routes/index');

require('./database/database.js');

app.use(express.json());

app.use('/', routes);

app.set('port', '4000');

app.listen(app.get('port'), () => {
  console.log(`App listen on port ${app.get('port')}`);
});
