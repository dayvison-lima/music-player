import axios from 'axios'

// const NODE_ENV = import.meta.env.VITE_NODE_ENV

// const URL = 'http://localhost:3001/api'
const URL = 'https://music-player-th45.onrender.com/api'

const responseArtist = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)
const responseArtist2 = await axios.get(`${URL}/artists2`)
const responseSongs2 = await axios.get(`${URL}/songs2`)

export const artistArray = responseArtist.data
export const songsArray = responseSongs.data

export const artistArray2 = responseArtist2.data
export const songsArray2 = responseSongs2.data


// console.log(responseArtist.data)