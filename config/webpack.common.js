const helpers = require('./helpers.methods');
const plugins = require('./helpers.plugins.js');
/**
 * Config webpack.
 */
module.exports = function () {

  // isProd = options.env === 'production';

  return {
    cache : true,
    /**
     *
     */
    target: 'node',

    /**
     * Developer tool to enhance debugging
     */
    devtool: 'eval',

    /**
     * Switch loaders to debug mode.
     */
    // debug: true,

    /**
     * The resolving of modules.
     */
    resolve: {

      /**
       * An array of extensions that should be used to resolve modules.
       */
      extensions: [ '.ts', '.js', '.sass', '.json' ],
      // remove other default values
      modules   : [ 'node_modules' ]

    },

    module : {
      /**
       * Applied loaders.
       */
      loaders: [
        {
          test   : /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader : 'babel-loader',
          query  : {
            cacheDirectory: true,
            presets       : 'es2015'
          }
        },
        /**
         * JSON
         */
        {
          test  : /\.json$/,
          loader: 'json-loader'
        },
        /**
         * Represents css files as string.
         */
        {
          test: /\.css$/,
          use : [
            'to-string-loader',
            'style-loader',
            'css-loader?modules'
          ]
        },
        /**
         * HTML as string
         */
        {
          test   : /\.html$/,
          loader : 'raw-loader',
          exclude: [ helpers.root('src/client/index.html') ]
        },
        /**
         * Supporting images in CSS files.
         */
        {
          test  : /\.(jpg|png|gif)$/,
          loader: 'file'
        },
        /**
         * Fonts.
         */
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use : [
            {
              loader : 'url-loader',
              options: {
                limit   : 10000,
                mimetype: 'application/font-woff'
              }
            }
          ]
        },
        {
          test  : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }

      ]
    },
    plugins: [

      /**
       * Plugin: NamedModulesPlugin (experimental)
       * Description: Uses file names as module name.
       *
       */
      // new plugins.NamedModulesPlugin()

    ]
  }

};
