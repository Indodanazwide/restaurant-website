import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

// create database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// connect and chech connection
db.connect((error) => {
    if (error) {
        console.error(error)
    } else {
        console.log('Connected to the database')
    }
})

export default db