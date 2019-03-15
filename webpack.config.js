const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HTMLWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}
