import express from 'express'
import cors from 'cors'
import { database } from './connect.js'
import path from 'path'

const __dirname = path.resolve()

const app = express()

const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/api/', (request, response) => {
    response.send('Olá, Mundo!!!')
})

app.get('/api/artists', async (request, response) => {
    try {
        const artists = await database.collection('artists').find({}).toArray();
        response.send(artists);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar artistas", error });
    }
});

app.get('/api/songs', async (request, response) => {
    try {
        const songs = await database.collection('songs').find({}).toArray();
        response.send(songs);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar músicas", error });
    }
});

app.use(express.static(path.join(__dirname, '../front-end/dist')))

app.get('*', async (request, response) => {
    response.sendFile(path.join(__dirname, '../front-end/dist/index.html'))
})

app.listen(PORT, () => {
    console.log('servidor está escutando a porta: ' + PORT)
} )