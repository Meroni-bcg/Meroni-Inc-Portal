// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Meroni Inc an Electronic Medical Record System')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })