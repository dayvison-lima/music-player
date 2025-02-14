import { MongoClient } from 'mongodb'

const URI = 'mongodb+srv://limadayvison:waD2TcSxCG4ZT2Hr@cluster0.hkxbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(URI)

export const database = client.db('spotifyAula')
const songColletion = await database.collection('songs').find({}).toArray()

// console.log(database)

// console.log(songColletion)