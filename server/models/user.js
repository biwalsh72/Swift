/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
const mysql = require('mysql');
const config = require('../config/db-info');

const connection = mysql.createConnection(config.configDB);

connection.connect(function(err) {
  if (err) {
    return console.error(`error: ${err.message}`);
  }

  console.log('Connected to the MySQL server.');
});

const _login = (username, password, done) => {
  console.log('querying');
  connection.query(
    `SELECT * FROM \`swiftlogin\` WHERE \`username\` = '${username}'`,
    (err, rows) => {
      if (err) return done(err);
      if (!rows.length) {
        return done({ loginMessage: 'Invalid email or password.' });
      }
      if (!(rows[0].password === password))
        return done({ loginmessage: 'Invalid email or password.' });

      return done(null, rows[0]);
    }
  );
};

const _getUserById = (id, done) => {
  connection.query(
    `SELECT * FROM \`swiftlogin\` WHERE \`id\` = '${id}'`,
    (err, rows) => {
      if (err) return done(err);
      if (!rows.length) {
        return done({ loginMessage: 'Invalid email or password.' });
      }

      return done(null, rows[0]);
    }
  );
};

module.exports.login = _login;
module.exports.getUserById = _getUserById;
