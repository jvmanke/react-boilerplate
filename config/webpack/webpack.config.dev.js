const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const resolve = require('./utils/resolve')

module.exports = {
  resolve,
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.DEVTOOLS_WINDOW': JSON.stringify(process.env.DEVTOOLS_WINDOW),
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HTMLWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}
