const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const { NODE_ENV, CLIENT_PORT, SERVER_PORT } = process.env;
const devMode = NODE_ENV !== 'production';
const buildPath = path.resolve(__dirname, 'build');
const serverURL = `http://localhost:${SERVER_PORT}`;

module.exports = {
  mode: devMode ? 'development' : 'production',
  target: 'web', // compile for usage in a browser-like environment (default)
  entry: {
    bundle: ['./client/index.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({ // plugin extracts CSS into separate files
      filename: 'css/bundle.css', // relative to output.path
    }),
    new Dotenv(),
  ],
  output: {
    filename: '[name].js',
    path: buildPath,
    publicPath: '/', // every file emitted to your path directory will be referenced from here
  },
  devServer: {
    port: CLIENT_PORT,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': serverURL,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // match js or jsx files
        exclude: /node-modules/, // ignore node-modules
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]ss|css)$/, // match sass|scss|css
        use: [
          MiniCssExtractPlugin.loader, // extracts CSS into separate files
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader', // compiles SCSS/SASS to CSS
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/, // load images
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // load fonts
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
};
