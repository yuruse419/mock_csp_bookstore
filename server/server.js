import express from 'express'
import cors from 'cors'
import sanitize from 'mongo-sanitize'
import bcrypt from 'bcrypt'

import './middleware/dotenv.js'
import corsOptions from './middleware/corsOptions.js'
import { connectDb, closeDb } from './middleware/db.js'

const port = process.env.PORT || 3000
const app = express()

console.log(port);

app.use(express.json())
app.use(cors(corsOptions))

const dbQuery = async (collectionName, query, params = []) => {
  const db = await connectDb()

  const collection = db.collection(collectionName)

  let result = await collection[query](...params)

  try {
    result = await result.toArray()
  }
  catch(err) {
    // no action necessary
  }

  await closeDb()

  return result
}

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body

    const result = await dbQuery('user', 'find', [{ username: sanitize(username) }])
    const foundUser = result[0]

    if(foundUser) {
      res.json({ serverMessage: 'Could not register. Try another username.' })
    }
    else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if(err) {
          return res.status(500).json(err)
        }
        else {
          const insertedUser = await dbQuery('user', 'insertOne', [{ username: sanitize(username), passwordHash: hash }])
          const insertedUserId = insertedUser.insertedId

          return res.json({ serverMessage: 'Registered successfully. Logging in...', userId: insertedUserId })
        }
      })
    }
  }
  catch(err) {
    res.status(500).json({ message: err.message })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    const result = await dbQuery('user', 'find', [{ username: sanitize(username) }])
    const foundUser = result[0]

    if(!foundUser) {
      res.json({ serverMessage: 'Incorrect username and/or password.' })
    }
    else {
      bcrypt.compare(password, foundUser.passwordHash, (err, result) => {
        if(err) {
          return res.status(500).json(err)
        }
        else if(!result) {
          return res.json({ serverMessage: 'Incorrect username and/or password.' })
        }
        else {
          return res.json({ serverMessage: 'Logging in...', userId: foundUser._id })
        }
      })
    }
  }
  catch(err) {
    res.status(500).json({ message: err.message })
  }
})

app.get('/book', async (req, res) => {
  const books = await dbQuery('book', 'find', [{}])

  res.json(books)
})

app.get('/apparel', async (req, res) => {
  const apparel = await dbQuery('apparel', 'find', [{}])

  res.json(apparel)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})