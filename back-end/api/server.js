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

// 🔹 Rota para pegar artistas
app.get('/api/artists', async (request, response) => {
    try {
        const artists = await database.collection('artists').find({}).toArray();
        response.send(artists);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar artistas", error });
    }
});

// 🔹 Rota para pegar músicas
app.get('/api/songs', async (request, response) => {
    try {
        const songs = await database.collection('songs').find({}).toArray();
        response.send(songs);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar músicas", error });
    }
});

// 🔹 Novas rotas para artists2 e songs2
app.get('/api/artists2', async (request, response) => {
    try {
        const artists2 = await database.collection('artists2').find({}).toArray();
        response.send(artists2);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar artists2", error });
    }
});

app.get('/api/songs2', async (request, response) => {
    try {
        const songs2 = await database.collection('songs2').find({}).toArray();
        response.send(songs2);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar songs2", error });
    }
});

app.use(express.static(path.join(__dirname, '../front-end/dist')))

app.get('*', async (request, response) => {
    response.sendFile(path.join(__dirname, '../front-end/dist/index.html'))
})

app.listen(PORT, () => {
    console.log('Servidor está escutando na porta: ' + PORT)
})
