
const express = require('express');
const tasks = require('./routes/taskroutes')

const user = require('./routes/user')
require('dotenv').config()
const {connectDB} = require('./db/dbCon')
const errorHandlerMiddleware =  require('./middleware/errorHandler')
const notFound = require('./middleware/notfound')
const cors = require('cors')
const path = require('path')
const app = express()
//middleware
app.use(express.json())
app.use(cors())

// app.use((req, res, next ) =>{
//     res.header('Access-Control-Allow-Methods', 'GET', 'POST ')
//    res.header('Access-Control-Allow-Origin', '*') 
//    res.header('Access-Control-Allow-Headers', '*')
//    next();
// });

app.use('/', express.static(path.join(__dirname,'public')))


//routess

app.use('/api/v01/tasks', tasks)
app.use('/api/v01/user', user)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 6000
const start = async () =>{
    try {

        await connectDB(process.env.TASKDB_URL)
         app.listen(port, 
                console.log(`app is listenig at port ${port}`)
)
    } catch (error) {
        console.log(error)
    }
}

start()
