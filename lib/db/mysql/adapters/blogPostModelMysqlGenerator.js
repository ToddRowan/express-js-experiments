const mysql = require('mysql');

class blogPostModelMysqlGenerator {

  // Create a new generator with a model.
  constructor(blogPostModel) {
    this._bpm = blogPostModel;
  }

  getInsertSql() {
    let start = 'INSERT INTO posts SET ';
    return start + this._getValuesToSet();
  }

  getUpdateSql() {
    let start = 'UPDATE posts SET ';
    return start + this._getValuesToSet() + ' WHERE id = ' + mysql.escapeId(this._bpm.id);
  }

  getRetrieveByIdSql() {
    let sql = 'SELECT * FROM posts WHERE id = ' + mysql.escapeId(this._bpm.id);

    return sql;
  }

  getDeleteByIdSql() {
    let sql = 'DELETE FROM posts WHERE id = ' + mysql.escapeId(this._bpm.id);

    return sql;
  }

  _getValuesToSet() {
    let entries = Object.entries(this._bpm);
    let result = '';

    // Build an escaped fields clause.
    for (var inx = 0; inx < entries.length; inx++ ) {
      if (entries[inx][0] !== 'id' && entries[inx][1] !== undefined) {
        result += entries[inx][0] + '=' + mysql.escape(entries[inx][1]) +', ';
      }
    }

    // Strip off any trailing comma + space.
    if (result.endsWith(', ')) {
      result = result.substring(0, result.length - 2);
    }

    return result;
  }
}

module.exports = blogPostModelMysqlGenerator;