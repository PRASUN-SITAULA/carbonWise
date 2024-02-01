const express = require('express')
const helmet = require('helmet')
// const rateLimit  = require('express-rate-limit') //yet to be used


const app = express()

// cors 
app.use(
    cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
})
)


// security packages
app.use(helmet())

module.exports = app

