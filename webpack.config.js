/**
 *
 */
switch (process.env.COMPILE_TYPE) {
  //
  case 'aot':
    module.exports = require('./config/webpack.compile.aot');
    break;
  case 'jit':
    module.exports = require('./config/webpack.compile.jit');
    break;
  case 'waot':
    module.exports = require('./config/webpack.compile.waot');
    break;
  //
  default:
    break;
}



