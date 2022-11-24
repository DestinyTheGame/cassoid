//
// Require all the components that we need to build the application.
//
require('./dataisbeautiful');
require('./suggestion');
require('./summary');
require('./weapon');
require('./wizard');
require('./header');
require('./perks');
require('./stats');
require('./plop');
require('./icon');

//
// Full pages.
//
require('./page');
require('./telesto');
require('./welcome');

//
// Initialize the default state.
//
require('./state');

module.exports = require('red/register')();
