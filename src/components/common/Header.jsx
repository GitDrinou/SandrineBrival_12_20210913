import '../../sass/Header.scss'
import HeaderLogo from '../../assets/sportSee-logo.svg'
import Navigation from './Navigation'

/**
 * <em>COMMON COMPONENT</em><br>
 * This component function display the header of the website
 * @returns The different part of the header : <br>
 * - the SportSee logo
 * - the component Navigation for displaying the different navigation's link
 */
function Header() {
    return(
        <div className="headerWrapper">
            <div className="logoContainer"><img src={HeaderLogo} alt="Logo SportSee" /></div>
            <Navigation />
        </div>
    )
}

export default Header