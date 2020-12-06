// The setupFiles option is not applied to this globalSetup file.
// So we have to re-require this here.
// No var assignment is necessary if you aren't going to use it as an object.
require ('dotenv/config');
const flusher = require('../utils/schema/schemaTools');

// Let's flush the database before we run any tests.
module.exports = async () => {
  await flusher.flushDb();
};