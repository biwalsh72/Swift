// @flow
const express = require('express');

const app = express();

require('../server/config/express').configExpress(app);
require('../server/config/passport').configPassport(app);
require('../server/routes/user')(app);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3001);
const serveripaddress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const server = app.listen(app.get('port'), serveripaddress, () => {
  console.log('Listening on port %d', server.address().port);
});
