var mysql = require('mysql');
var util  = require('util');
// No var assignment is necessary if you aren't going to use it as an object.
// TODO: get rid of hard-coded paths. Figure out the alternative to this.
require('dotenv').config({path: 'D:\\WebstormProjects\\new-blog-work\\.env'});

// Use let
// Use async for each action
// Tie them all together with then
// and throw in one catch at the end for different failure types
// Then use await for each DB call.
// https://javascript.info/async-await for good await guides.

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

let conProm = new Promise((res, rej) => {
  connection.connect(function(err) {
    if (err) {
      rej('error connecting: ' + err);
    }
    else {
      res(connection);
    }
  });
});

let tableQuery = new Promise((res, rej) => {
  connection.query('SHOW TABLES', (err, rows, colInfo) => {
    if (err) {
      rej(err);
    }
    else {
      res(rows);
    }
  });
});

conProm
  .then(con => {
    console.log('Connection status is: ' + con.state);
    tableQuery.then( rows => {
      console.log('Table count: ' + rows.length);
      // Each returned row has a named property for each column.
      rows.forEach(element => console.log('Table: ' + element['Tables_in_' + process.env.DB_NAME]));
    })
      .catch(err => {console.log('fucked tableQuery.');})
      .finally( () => {process.exit(0);});
  })
  .catch(err => {
    console.log('fucked connection obtaining.');
    process.exit(1);
  });
