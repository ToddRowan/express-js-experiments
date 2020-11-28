const bpda = require('../../lib/db/mysql/actions/blogPostDbActions.js');

test('We get an insert to complete.', () => {
  expect.assertions(1);
  let actions = new bpda(null);
  // Use this syntax for testing methods that return promises.
  return expect(actions.create()).resolves.toBeGreaterThan(0);
});