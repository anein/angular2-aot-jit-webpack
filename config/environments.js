const helpers = require('./helpers.methods.js');
const pkg = require('../package.json');

/**
 * Stores common application parameters.
 *
 * @type {{}}
 */
const METADATA = {
  title      : pkg.name,
  description: pkg.description,
  version    : pkg.version,
  baseUrl    : '/',
  ENV        : process.env.ENV = process.env.NODE_ENV,
  host       : process.env.HOST || 'localhost',
  port       : process.env.PORT = process.env.NODE_PORT || 3000,
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = METADATA;
