// import {artistArray} from '../../front-end/src/assets/database/artists.js'
// import {songsArray} from '../../front-end/src/assets/database/songs.js'
import {artistArray2} from '../../front-end/src/assets/database/artists2.js'
import {songsArray2} from '../../front-end/src/assets/database/songs2.js'
import { database } from './connect.js'

  // const newArtistArray = artistArray.map((currentArtistObj) => {
  //   const newArtistObj = { ...currentArtistObj }
  //   delete newArtistObj.id
  //   return newArtistObj
  // })

  // const newSongsArray = songsArray.map((currentSongObj) => {
  //   const newSongObj = { ...currentSongObj }
  //   delete newSongObj.id
  //   return newSongObj
  // })

  const newArtistArray2 = artistArray2.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj }
    delete newArtistObj.id
    return newArtistObj
  })

  const newSongsArray2 = songsArray2.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj }
    delete newSongObj.id
    return newSongObj
  })

  const responseSongs = await database.collection('songs').insertMany(newSongsArray2)
  const responseArtists = await database.collection('artists').insertMany(newArtistArray2)

  console.log(responseArtists)
  console.log(responseSongs)