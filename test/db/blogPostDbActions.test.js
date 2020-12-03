const bpda = require('../../lib/db/mysql/actions/blogPostDbActions.js');
const bpm  = require('../../lib/db/blogPostModel');

test('We get an insert to complete.', () => {
  // Set this to capture a failure of a promise to resolve.
  expect.assertions(1);
  let bpmInst = new bpm({title: 'title', author: 7, name: 'name', guid: Date.now().toString()});
  let actions = new bpda();
  // Use this syntax for testing methods that return promises.
  return expect(actions.create(bpmInst)).resolves.toBeGreaterThan(0);
});