const bpmgen = require('../../lib/db/mysql/adapters/blogPostModelMysqlGenerator.js');
const bpm = require('../../lib/db/blogPostModel.js');

test('Get escaped SQL for a delete action.', () => {
  let idObj = {id: '1'};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getDeleteByIdSql()).toBe('DELETE FROM posts WHERE id = `1`');
});

test('Get escaped SQL for a retrieve action.', () => {
  let idObj = {id: 1};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getRetrieveByIdSql()).toBe('SELECT * FROM posts WHERE id = `1`');
});

test('Get escaped SQL for an update action, simple title.', () => {
  let idObj = {id: 1, title: 'Buttocks!'};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getUpdateSql()).toBe('UPDATE posts SET title=\'Buttocks!\' WHERE id = `1`');
});

test('Get escaped SQL for an update action, ticks in the value.', () => {
  let idObj = {id: 1, title: 'Ticks: ```'};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getUpdateSql()).toBe('UPDATE posts SET title=\'Ticks: ```\' WHERE id = `1`');
});

test('Get escaped SQL for an update action, Various quotes in the value.', () => {
  let idObj = {id: 1, title: 'I once said "Don\'t eat yellow snow!"'};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getUpdateSql()).toBe('UPDATE posts SET title=\'I once said \\"Don\\\'t eat yellow snow!\\"\' WHERE id = `1`');
});

test('Get escaped SQL for an insert action, minimum fields', () => {
  let idObj = {title: 'title', author: 'bob', name: 'name', guid: 'guid'};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getInsertSql()).toBe('INSERT INTO posts SET title=\'title\', author=\'bob\', name=\'name\', guid=\'guid\'');
});

test('Get escaped SQL for an insert action, ignore id', () => {
  let idObj = {id: 20, title: 'title', author: 'bob', name: 'name', guid: 'guid'};
  let model = new bpm(idObj);
  let generator = new bpmgen(model);
  expect(generator.getInsertSql()).toBe('INSERT INTO posts SET title=\'title\', author=\'bob\', name=\'name\', guid=\'guid\'');
});