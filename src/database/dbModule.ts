import sqlite from 'sqlite3'
import path from 'path'

const pathToDb = path.join(process.cwd(), 'src/database')
const db = new sqlite.Database(`${pathToDb}/database.db`)

export default db
