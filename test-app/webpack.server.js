const path = require('path');
const NodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== 'production';
const buildPath = path.resolve(__dirname, 'build', 'server');

module.exports = {
  mode: devMode ? 'development' : 'production',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [NodeExternals()], // in order to ignore all modules in node_modules folder
  entry: {
    index: './server/index.js',
  },
  plugins: [
    new NodemonPlugin({ // to watch and restart the output file, but only when webpack is in watch mode (ie, --watch)
      watch: buildPath,
    }),
    new Dotenv(),
  ],
  output: {
    filename: '[name].js',
    path: buildPath, // path to output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // match js or jsx files
        exclude: /node-modules/, // ignore node-modules
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]ss|css)$/,
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
