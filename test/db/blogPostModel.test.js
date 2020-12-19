const bpm = require('../../lib/db/blogPostModel.js');

test('Empty object to have undefined properties.', () => {
  let model = new bpm();
  expect(model.title).toBe(undefined);
});

test('Just a title, no author or content.', () => {
  let model = new bpm({title:'title'});
  expect(model.title).toBe('title');
  expect(model.author).toBe(undefined);
  expect(model.content).toBe(undefined);
});

test('All properties set and retrieved.', () => {
  let testDate = 1608336000021;
  let model = new bpm({title:'title', author:7, content: 'content', 'id':1, excerpt: 'excerpt', name: 'name', guid: 'guid',
  status: 1, commentStatus: 1, createdDate: testDate, modifiedDate: testDate});
  expect(model.title).toBe('title');
  expect(model.author).toBe(7);
  expect(model.content).toBe('content');
  expect(model.id).toBe(1);
  expect(model.excerpt).toBe('excerpt');
  expect(model.name).toBe('name');
  expect(model.guid).toBe('guid');
  expect(model.status).toBe(1);
  expect(model.commentStatus).toBe(1);
  expect(model.createdDate).toBe(testDate);
  expect(model.modifiedDate).toBe(testDate);
});