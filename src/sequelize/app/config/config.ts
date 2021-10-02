import * as dotenv from 'dotenv'
import * as path from 'path';
dotenv.config();

module.exports = {
	dialect: process.env.DB_DIALECT || 'sqlite',
    storage: process.env.DB_STORAGE_FILE || path.join('database', 'database.sqlite')
}