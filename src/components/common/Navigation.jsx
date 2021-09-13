import '../../sass/Header.scss'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className='navContainer'>
            <Link to="" className="navLink">Accueil</Link>
            <Link to="" className="navLink">Profil</Link>
            <Link to="" className="navLink">Réglage</Link>
            <Link to="" className="navLink">Communauté</Link>
        </nav>
    )
}

export default Navigation