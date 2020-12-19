const mysql = require('mysql');

class blogAuthorModelMysqlGenerator {

  // Create a new generator with a model.
  constructor(blogAuthorModel) {
    this._bpa = blogAuthorModel;
  }

  getInsertSql() {
    let start = 'INSERT INTO authors SET ';
    return start + this._getValuesToSet();
  }

  getUpdateSql() {
    let start = 'UPDATE authors SET ';
    return start + this._getValuesToSet() + ' WHERE id = ' + mysql.escapeId(this._bpa.id);
  }

  getRetrieveByIdSql() {
    let sql = 'SELECT * FROM authors WHERE id = ' + mysql.escapeId(this._bpa.id);

    return sql;
  }

  getDeleteByIdSql() {
    let sql = 'DELETE FROM authors WHERE id = ' + mysql.escapeId(this._bpa.id);

    return sql;
  }

  _getValuesToSet() {
    let entries = Object.entries(this._bpa);
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

module.exports = blogAuthorModelMysqlGenerator;