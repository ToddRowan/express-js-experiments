class blogPostModel {

  // Create new adapter class to build and escape items from this model.
  // See https://www.npmjs.com/package/mysql#escaping-query-values
  // Build output for each possible CRUD method as appropriate.
  constructor(props) {
    let properties = props || {};
    this.id = properties.id ? properties.id : undefined;
    this.title = properties.title ? properties.title : undefined;
    this.author = properties.author ? properties.author : undefined;
    this.content = properties.content ? properties.content : undefined;
    this.excerpt = properties.excerpt ? properties.excerpt : undefined;
    this.name = properties.name ? properties.name : undefined;
    this.guid = properties.guid ? properties.guid : undefined;
    this.status = properties.status ? properties.status : undefined;
    this.commentStatus = properties.commentStatus ? properties.status : undefined;
    this.createdDate = properties.createdDate ? properties.createdDate : undefined;
    this.modifiedDate = properties.modifiedDate ? properties.modifiedDate : undefined;
  }
}

module.exports = blogPostModel;