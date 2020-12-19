const bpa = require('../../lib/db/blogAuthorModel.js');

test('Empty object to have undefined properties.', () => {
  let model = new bpa();
  expect(model.fullName).toBe(undefined);
});

test('Just a name, no username or status.', () => {
  let model = new bpa({fullName:'Chandler Bing'});
  expect(model.fullName).toBe('Chandler Bing');
  expect(model.userName).toBe(undefined);
  expect(model.status).toBe(undefined);
});

test('All properties set.', () => {
  let model = new bpa({fullName:'Chandler Bing', userName: 'cbing', email: 'cbing@friends.net', 'id':1, 'status': 1});
  expect(model.fullName).toBe('Chandler Bing');
  expect(model.userName).toBe('cbing');
  expect(model.email).toBe('cbing@friends.net');
  expect(model.id).toBe(1);
  expect(model.status).toBe(1);
});