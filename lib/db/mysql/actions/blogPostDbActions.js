const mysql = require('mysql');
const bpm = require('../../blogPostModel');

class blogPostDbActions {

  constructor() {
    this._connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    this._id = -1;
  }

  create(blogPostModel) {
    let sql = 'INSERT INTO posts (title, author, content, excerpt, name, guid) VALUES ("title", 1, "this is the post content", "this is the post excerpt", "joe", "' + Date.now() + '")';
    return new Promise((res, rej) => {
      // Execute the query.
      this._connection.query(sql, (err, results) => {
        // Release the connection. Not sure if this is the best way to do this.
        this._connection.destroy();

        // If something went wrong, tell the caller.
        if (err) {
          rej(err);
        }
        else {
          // If we were to return the model, we'd prolly want to do a retrieve first, otherwise we'd be missing default values.
          this._id = results.insertId;
          res(this._id);
        }
      });
    });
  }

  getId() {
    return this._id;
  }
}

module.exports = blogPostDbActions;