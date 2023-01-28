const express = require('express')
const app = express()
const tasks = require('./router/tasks')
const connectmongo = require('./db/connect')
require('dotenv').config({path:'../private.env'})

console.log(process.env.MONGO_URI)
// routes

app.use("/api/task", tasks)

const start = async () => {

    try {
        await connectmongo.connect(process.env.MONGO_URI)
        app.listen(8000, () => {
            console.log("Listening to port 8000")
        })
    } catch (error) {

        console.log(error)
    }
    
}

start() 