import path from 'path'

import express from 'express'
import expressStatiGzip from 'express-static-gzip'

const port = process.env.PORT || 5000
const app = express()

// Serve the static files from the React app
app.use('/', expressStatiGzip('dist'))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port)

console.info(`App is listening on port ${port}`)
