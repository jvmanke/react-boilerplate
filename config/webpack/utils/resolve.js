const path = require('path')

const toRootFolder = '../../..'

module.exports = {
  modules: [
    path.join(__dirname, toRootFolder, 'src'),
    path.join(__dirname, toRootFolder, 'node_modules'),
  ],
  extensions: ['.js'],
}
