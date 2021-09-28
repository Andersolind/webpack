const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== 'production';
const buildPath = path.resolve(__dirname, 'build', 'server');

module.exports = {
  mode: devMode ? 'development' : 'production',

  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',

  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],
  entry: {
    index: './server/server.js',
  },
  plugins: [

    // watch and restart output file, but only when webpack is in watch mode (ie, --watch)
    new NodemonPlugin({
      watch: buildPath,
    }),
    new Dotenv(),
  ],
  output: {
    filename: '[name].js',
    path: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/u,
        exclude: /node-modules/u,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]ss|css)$/u,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {

                // this is where we're adding the CSS module names only
                exportOnlyLocals: true,
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
