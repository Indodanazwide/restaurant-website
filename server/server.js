import express from 'express'
import db from '../database/db.js'
import dotenv from 'dotenv'
import router from '../routes/router.js'

dotenv.config()

// server init
const server = express()
const port = process.env.PORT

// middleware
server.use(express.json())

// route
server.use('/api', router)

// start the server
server.listen(port, () => {
    console.log('Server running on port: ', port)
})