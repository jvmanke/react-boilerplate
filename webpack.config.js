const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css)$/,
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
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HTMLWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CompressionPlugin({ exclude: /\.(html)$/, deleteOriginalAssets: true }),
  ],
}
