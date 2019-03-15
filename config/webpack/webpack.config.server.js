const path = require('path')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.join(__dirname, '../..', 'dist-server'),
    filename: 'server.js',
    publicPath: '/static/',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
