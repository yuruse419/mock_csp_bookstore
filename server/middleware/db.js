import './dotenv.js'
import { MongoClient } from 'mongodb'

const dbUrl = process.env.DATABASE_URL

const client = new MongoClient(dbUrl)

const dbName = 'mock_bookstore'

export const connectDb = async () => {
  try {
    await client.connect()
  
    return client.db(dbName)
  }
  catch(err) {
    console.log(err.message)
  }
}

export const closeDb = async () => {
  await client.close()
}