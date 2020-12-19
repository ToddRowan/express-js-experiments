const bamgen = require('../../lib/db/mysql/adapters/blogAuthorModelMysqlGenerator.js');
const bam = require('../../lib/db/blogAuthorModel.js');

test('Get escaped SQL for a delete action.', () => {
  let idObj = {id: '1'};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getDeleteByIdSql()).toBe('DELETE FROM authors WHERE id = `1`');
});

test('Get escaped SQL for a retrieve action.', () => {
  let idObj = {id: 1};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getRetrieveByIdSql()).toBe('SELECT * FROM authors WHERE id = `1`');
});

test('Get escaped SQL for an update action, simple username.', () => {
  let idObj = {id: 1, userName: 'cbing'};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getUpdateSql()).toBe('UPDATE authors SET userName=\'cbing\' WHERE id = `1`');
});

test('Get escaped SQL for an update action, ticks in the value.', () => {
  let idObj = {id: 1, userName: 'Ticks: ```'};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getUpdateSql()).toBe('UPDATE authors SET userName=\'Ticks: ```\' WHERE id = `1`');
});

test('Get escaped SQL for an update action, Various quotes in the value.', () => {
  let idObj = {id: 1, fullName: 'I once said "Don\'t eat yellow snow!"'};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getUpdateSql()).toBe('UPDATE authors SET fullName=\'I once said \\"Don\\\'t eat yellow snow!\\"\' WHERE id = `1`');
});

test('Get escaped SQL for an insert action, minimum fields', () => {
  let idObj = {userName: 'cbing', fullName: 'Chandler Bing', email: 'cbing@friends.net', status: 1};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getInsertSql()).toBe('INSERT INTO authors SET userName=\'cbing\', email=\'cbing@friends.net\', fullName=\'Chandler Bing\', status=1');
});

test('Get escaped SQL for an insert action, ignore id', () => {
  let idObj = {id: 20, userName: 'cbing', fullName: 'Chandler Bing', email: 'cbing@friends.net', status: 1};
  let model = new bam(idObj);
  let generator = new bamgen(model);
  expect(generator.getInsertSql()).toBe('INSERT INTO authors SET userName=\'cbing\', email=\'cbing@friends.net\', fullName=\'Chandler Bing\', status=1');
});