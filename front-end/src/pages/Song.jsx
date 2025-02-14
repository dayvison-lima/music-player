import { Link, useParams } from "react-router-dom"
import Player from "../components/Player"
import { songsArray } from "../assets/database/songs"
import { artistArray } from "../assets/database/artists"

const Song = () => {

  const { id } = useParams()


  
  const songObj = songsArray.filter((currentSongObj) => currentSongObj._id === id)[0]

  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === songObj.artist)[0]

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artistObj.name)

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
  
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id

  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`imagem da música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className='song__artist-image'>
          <Link to={`/artist/${artistObj._id}`}>
            <img
              src={artistObj.image} 
              alt={`imagem de ${songObj.artist}`}
              width={75}
              height={75}
            />
          </Link>
        </div>

        <Player duration={songObj.duration} randomIdFromArtist={randomIdFromArtist} randomId2FromArtist={randomId2FromArtist} audio={songObj.audio} />

        <div>
          <p className='song__name'>{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song