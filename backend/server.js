const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({path:'../.env'})


const port = process.env.PORT
console.log(port)
const server = app.listen(port,()=>{
    console.log("welcome to the server")
})