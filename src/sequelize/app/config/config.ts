import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()

module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
	dialect: process.env.DB_DIALECT || 'sqlite',
    storage: process.env.DB_STORAGE_FILE || path.join('database', 'database.sqlite')
}