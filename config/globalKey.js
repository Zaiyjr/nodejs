import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE_NAME = process.env.DATABASE_NAME

export {PORT,HOST, USER,PASSWORD,DATABASE_NAME}