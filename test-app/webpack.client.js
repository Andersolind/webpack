const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const {
  NODE_ENV, CLIENT_PORT, SERVER_PORT,
} = process.env;
const devMode = NODE_ENV !== 'production';
const buildPath = path.resolve(__dirname, 'build');
const serverURL = `http://localhost:${SERVER_PORT}`;

module.exports = {
  mode: devMode ? 'development' : 'production',
  target: 'web',
  entry: {
    bundle: ['./client/client.js'],
  },
  plugins: [

    // plugin extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
    new Dotenv(),
  ],
  output: {
    filename: '[name].js',
    path: buildPath,

    // every file emitted to your path directory will be referenced from here
    publicPath: '/',
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
        test: /\.(js|jsx)$/u,
        exclude: /node-modules/u,
        use: ['babel-loader'],
      },
      {

        // match sass|scss|css
        test: /\.(s[ac]ss|css)$/u,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/u,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/u,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
};
