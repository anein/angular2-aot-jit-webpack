/**
 * Compiles Angular using TS-loader.
 */
const webpack = require('webpack');
const path = require('path');

// tools
const helpers = require('./helpers.methods');
const plugins = require('./helpers.plugins.js');

// the settings that are common to prod and dev
const commonWebpackConfig = require('./webpack.common');

const METADATA = require('./environments');

/**
 * Webpack configuration
 *
 */
module.exports = plugins.webpackMerge(commonWebpackConfig(), {
  target : 'web',
  /**
   *
   */
  entry  : {
    'polyfills': helpers.root('src/client', 'polyfills.browser.ts'),
    'main'     : helpers.root('src/client', 'app/main.ts')
  },
  /**
   *
   */
  output : {

    /**
     * Path
     */
    path: helpers.root('dist/client/'),

    /**
     * Specifies the name of each output file.
     */
    filename: '[name].bundle.js'
  },
  /**
   *
   */
  resolve: {
    extensions: [ '.ts', '.sass' ],
    modules   : [ helpers.root("src/client"), "node_modules" ],
  },

  module: {
    loaders: [
      /**
       * Typescript.
       */
      {
        test   : /\.ts$/,
        use    : [
          'ts-loader',
          'angular2-template-loader'
        ],
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /web_modules/,
          /test/,
          /node_modules/ ]
      },
      {
        test: /\.sass$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    /**
     *  Shares common code between the pages.
     *
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'polyfills', 'main' ].reverse()
    }),

    /**
     * Copy files and directories in webpack.
     */
    new plugins.CopyWebpackPlugin([ {
      from: 'src/client/assets/',
      to  : 'assets'
    } ], {
      ignore: [
        // Doesn't copy any files with extensions
        '*.sass',
        '*.css'
      ],

      // copy only modified files
      copyUnmodified: false
    }),

    /**
     * Simplifies creation of HTML files to serve your webpack bundles.
     */
    new plugins.HtmlWebpackPlugin({
      template      : helpers.root('src', 'client', 'index.html'),
      filename      : "index.html",
      chunksSortMode: 'dependency'
    }),

    /**
     * Generate html tags based on javascript maps.
     */
    new plugins.HtmlElementsPlugin({
      headTags: require('./head-config.common')
    }),

    /**
     *
     */
    new plugins.AssetsPlugin({
      path       : helpers.root('dist', 'client'),
      filename   : 'webpack-assets.json',
      prettyPrint: true
    }),

    /**
     * Define free variables.
     */
    new plugins.DefinePlugin({
      'ENV'        : JSON.stringify(METADATA.ENV),
      'metadata'   : JSON.stringify(METADATA),
      'process.env': {
        'ENV'     : JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV)
      }
    }),
    /**
     * Defines externals.
     */
    new plugins.ExternalsPlugin({
      type   : 'commonjs',
      include: __dirname + '/node_modules',
    })
  ]
});
