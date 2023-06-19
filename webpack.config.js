const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const prod = process.env.NODE_ENV === 'production';
const devPort = 9001;
const buildDir = 'build/';
let publicPath = `http://localhost:${devPort}/`;
const plugins = [];

if (prod) {
  publicPath = `/${buildDir}`;
} else {
  plugins.push(new WebpackShellPluginNext({
    onBuildStart: {
      // XXX: when edge-src/ has syntax error, webpack dev server will crash; after we restart, previous
      // node processes may still be alive, which would take up the same PORT number and prevent dev server
      // to run again. We have to kill all node process
      scripts: ['pkill node'],
      blocking: true,
      parallel: false
    },
  }));
}

const entry = {
};

module.exports = {
  entry,

  output: {
    path: path.resolve(__dirname, `./public/${buildDir}`),
    filename: '[name]-[fullhash].js',
    publicPath,
  },

  plugins: [
    ...plugins,

    new ESLintPlugin({
      extensions: ['jsx', 'js'],
      exclude: [
        'node_modules',
      ],
    }),

    new BundleTracker({filename: './functions/webpack-stats.json'}),

    // Delete stale assets before each build
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '*.js',
        '*.css',
        '*.png',
        '*.txt',
      ],
      verbose: true,
      dry: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: {
              sync: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname, './public/'),
      },
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    compress: true,
    port: devPort,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  mode: prod ? 'production' : 'development',
};
