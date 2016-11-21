/**
 * Collection of useful methods for Webpack.
 */

var path = require('path');
var fs = require('fs');

/** set the root directory.  */
var ROOT = path.resolve(__dirname, '..');

/**
 * Checks if the process has a necessary flag.
 * 
 * @param {string} flag
 *
 * @return {boolean}
 */
function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

/**
 * Checks if Webpack Development Server running.
 * 
 */
function isWebpackDevServer() {
  return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
}

/**
 * Generates the full file/directory path relative to the root directory.
 * 
 */
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

/**
 * Generates the list of installed node modules in project.
 */
function nodeModules() {
  var nodeModules = {};
  fs.readdirSync(path.resolve('node_modules'))
    .filter(function (x) {
      return (['.bin'].indexOf(x) === -1)
    })
    .forEach(function (mod) {
      {
        nodeModules[mod] = 'commonjs ' + mod;
      }
    });
  return nodeModules;

}

// exports functions.
exports.nodeModules = nodeModules
exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;