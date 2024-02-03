const express = require('express')
const helmet = require('helmet')
// const rateLimit  = require('express-rate-limit') //yet to be used
const bodyParser = require('body-parser')
const cors = require('cors')
const llmRouter = require('./routes/llmRoutes')

const app = express()

// cors 
app.use(
cors({
    origin: 'http://localhost:5173',
    credentials: true
})
)
// parse incoming JSON data
app.use(bodyParser.json())
    
// security packages
app.use(helmet())
    
app.use('', llmRouter)

module.exports = app

