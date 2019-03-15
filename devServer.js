/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./config/webpack/webpack.config.dev')

const ip = '127.0.0.1'
const port = process.env.PORT || 5000
const app = express()
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: 'errors-only',
  })
)

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(
    path.join(compiler.outputPath, 'index.html'),
    // eslint-disable-next-line consistent-return
    (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    }
  )
})

app.listen(port, ip, err => {
  if (err) {
    console.warn(err)
    return
  }

  console.info(path.join(__dirname, 'dist/index.html'))
  console.info('\x1b[32m', `[Development] Express is running on http://${ip}:${port}`, '\x1b[0m')
})
