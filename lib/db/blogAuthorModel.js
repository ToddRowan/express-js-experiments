class blogAuthorModel {

  // Create new adapter class to build and escape items from this model.
  // See https://www.npmjs.com/package/mysql#escaping-query-values
  // Build output for each possible CRUD method as appropriate.
  constructor(props) {
    let properties = props || {};
    this.id = properties.id ? properties.id : undefined;
    this.userName = properties.userName ? properties.userName : undefined;
    this.email = properties.email ? properties.email : undefined;
    this.fullName = properties.fullName ? properties.fullName : undefined;
    this.status = properties.status ? properties.status : undefined;
  }
}

module.exports = blogAuthorModel;