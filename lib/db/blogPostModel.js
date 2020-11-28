class blogPostModel {
  constructor(props) {
    let properties = props || {};
    this.id = properties.id ? properties.id : undefined;
    this.title = properties.title ? properties.title : undefined;
    this.author = properties.author ? properties.author : undefined;
    this.content = properties.content ? properties.content : undefined;
    this.excerpt = properties.excerpt ? properties.excerpt : undefined;
    this.name = properties.name ? properties.name : undefined;
    this.guid = properties.guid ? properties.guid : undefined;
    this.status = properties.status ? properties.status : false;
    this.commentStatus = properties.commentStatus ? properties.status : true;
    this.createdDate = properties.createdDate ? properties.createdDate : undefined;
    this.modifiedDate = properties.modifiedDate ? properties.modifiedDate : undefined;
  }
}

module.exports = blogPostModel;