const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/main/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/main")
        ],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html',
      filename: './index.html'
    })
  ],
  externals: {
    '@trust/webcrypto': 'crypto',
    'text-encoding': 'TextEncoder',
    'node-fetch': 'fetch',
    'whatwg-url': 'window',
    'isomorphic-fetch': 'fetch',
  }
}
