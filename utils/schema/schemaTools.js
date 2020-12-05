const fs  = require('fs');
const pathtool = require('path');
const mysql = require('mysql');
// No var assignment is necessary if you aren't going to use it as an object.
require('dotenv').config({path: pathtool.dirname(fs.realpathSync(__filename)) + '../../../.env'});

// Use let and const
// Use async for each action
// Tie them all together with then
// and throw in one catch at the end for different failure types
// Then use await for each DB call.
// https://javascript.info/async-await for good await guides.

// The multipleStatements option allows us to execute files.
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true
});

const getConnection = new Promise((res, rej) => {
  connection.connect(err => {
    if (err) {
      rej('Error connecting: ' + err);
    }
    else {
      res();
    }
  });
});

const getTables = new Promise((res, rej) => {
  connection.query('SHOW TABLES', (err, retrievedRows, colInfo) => {
    if (err) {
      rej(err);
    }
    else {
      let rows = [];
      // Each returned row has a named property for each column.
      retrievedRows.forEach(element => {
        let tablename = element['Tables_in_' + process.env.DB_NAME];
        rows.push(tablename);
      });

      res(rows);
    }
  });
});

const dropTables = (rows) => {
  return new Promise((res, rej) => {
    if (rows.length > 0) {
      console.log('Deleting ' + rows.length + ' tables from the database.');
      connection.query('DROP TABLE IF EXISTS ' + rows.join(), (err, okPacket, colInfo) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    }
    else {
      console.log('No tables to delete.');
      res();
    }
  });
};

const createTables = () => {
  return new Promise( (res, rej) => {
    const sql = fs.readFileSync(pathtool.dirname(fs.realpathSync(__filename)) + '/sql/db.sql').toString();
    console.log('Running create table script.');
    connection.query(sql, (err, rows, colInfo) => {
      if (err) {
        rej(err);
      }
      else {
        res(rows);
      }
    });

  });
};

module.exports.flushDb = () => {
  getConnection
    .then(() => {
      getTables
        .then(dropTables)
        .then(createTables)
        .catch(err => {
          console.log('Error in table replacement: ' + err);
        })
        .finally(() => {
          console.log('Done.');
          process.exit(0);
        });
    })
    .catch(err => {
      console.log('Connection failure: ' + err);
      process.exit(1);
    });
};