const dotenv = require('dotenv')
const app = require('./app')

dotenv.config()


const port = process.env.PORT
const server = app.listen(port,()=>{
    console.log("welcome to the server",port)
})