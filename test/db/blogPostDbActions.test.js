const bpda = require('../../lib/db/mysql/actions/blogPostDbActions.js');
const bpm  = require('../../lib/db/blogPostModel');

test('We get a post insert to complete.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bpmInst = new bpm({title: 'title', author: 7, name: 'name', guid: 'notunique'});
  let actions = new bpda();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bpmInst)).resolves.toBeGreaterThan(0);
});

test('We get a post insert to fail because of a duplicate guid.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bpmInst = new bpm({title: 'title', author: 7, name: 'name', guid: 'notunique'});
  let actions = new bpda();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bpmInst)).rejects.toMatchObject({message: expect.stringContaining('ER_DUP_ENTRY')});
});