import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const URI = process.env.MONGODB_URI

const client = new MongoClient(URI)

export const database = client.db('spotifyAula')
const songColletion = await database.collection('songs').find({}).toArray()

// console.log(database)

// console.log(songColletion)