import 'dotenv/config'
import axios from 'axios'

const NODE_ENV = import.meta.env.VITE_NODE_ENV

const URL = NODE_ENV === 'development' ? 'http://localhost:3001/api' : '/api'

const responseArtist = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtist.data
export const songsArray = responseSongs.data


// console.log(responseArtist.data)