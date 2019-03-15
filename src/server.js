import path from 'path'

import express from 'express'

const port = process.env.PORT || 5000
const app = express()

// Serve the static files from the React app
app.use('/', express.static('dist'))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port)

console.info(`App is listening on port ${port}`)
