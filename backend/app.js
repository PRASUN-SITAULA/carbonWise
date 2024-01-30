const express = require('express')
const helmet = require('helmet')
// const rateLimit  = require('express-rate-limit') //yet to be used


const app = express()

// security packages
app.use(helmet())

module.exports = app

