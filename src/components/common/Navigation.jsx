import '../../sass/Header.scss'
import { Link } from 'react-router-dom'
import { HOME_ROUTE} from '../../utils/constant/router'

/**
 * COMMON COMPONENT : This component function display differents links of the website.
 * @returns A list of different Links as navigator's links : <br>
 * HOME_ROUTE as a global variable define the home page path wich display a temporary user's profile selection. <br>
 * It uses also for the profil's link.
 * 
 */
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