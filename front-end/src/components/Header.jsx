
import logoSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/'>
          <img className='logo' src={logoSpotify} alt='logo do spotify' />
        </Link>
        <Link className='header__link' to='/'>
            <h1>Spotify</h1>
        </Link>
    </div>
  )
}

export default Header