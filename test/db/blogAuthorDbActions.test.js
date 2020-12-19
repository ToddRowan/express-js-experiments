const bada = require('../../lib/db/mysql/actions/blogAuthorDbActions.js');
const bam  = require('../../lib/db/blogAuthorModel');

test('We get an author insert to complete.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bamInst = new bam({fullName: 'Chander Bing', userName: 'cbing', email: 'cbing@friends.net', status: 1});
  let actions = new bada();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bamInst)).resolves.toBeGreaterThan(0);
});

test('We get an author insert to fail because of duplicate username.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bamInst = new bam({fullName: 'Chander Bing', userName: 'cbing', email: 'cbing2@friends.net', status: 1});
  let actions = new bada();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bamInst)).rejects.toMatchObject({message: expect.stringContaining('ER_DUP_ENTRY')});
});

test('We get an author insert to fail because of duplicate email.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bamInst = new bam({fullName: 'Chander Bing', userName: 'cbing2', email: 'cbing@friends.net', status: 1});
  let actions = new bada();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bamInst)).rejects.toMatchObject({message: expect.stringContaining('ER_DUP_ENTRY')});
});

test('We get an author insert to fail because of both duplicate email and username.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bamInst = new bam({fullName: 'Chander Bing', userName: 'cbing', email: 'cbing@friends.net', status: 1});
  let actions = new bada();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bamInst)).rejects.toMatchObject({message: expect.stringContaining('ER_DUP_ENTRY')});
});