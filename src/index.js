//
// Require all the components that we need to build the application.
//
require('./suggestion');
require('./squarecon');
require('./wizard');
require('./perks');
require('./stats');
require('./plop');
require('./icon');
require('./bar');

//
// Full pages.
//
require('./telesto');

//
// Initialize the default state.
//
require('./state');

module.exports = require('red/register')();
