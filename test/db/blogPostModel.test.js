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

test('All properties set.', () => {
  let model = new bpm({title:'title', author:'author', content: 'content', 'id':1});
  expect(model.title).toBe('title');
  expect(model.author).toBe('author');
  expect(model.content).toBe('content');
  expect(model.id).toBe(1);
});