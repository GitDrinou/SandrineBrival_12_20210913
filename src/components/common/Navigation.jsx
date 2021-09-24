import '../../sass/Header.scss'
import { Link } from 'react-router-dom'
import { HOME_ROUTE} from '../../utils/constant/router'

function Navigation() {
    return (
        <nav className='navContainer'>
            <Link to={HOME_ROUTE} className="navLink">Accueil</Link>
            <Link to={HOME_ROUTE} className="navLink">Profil</Link>
            <Link to="#" className="navLink">Réglage</Link>
            <Link to="#" className="navLink">Communauté</Link>
        </nav>
    )
}

export default Navigation