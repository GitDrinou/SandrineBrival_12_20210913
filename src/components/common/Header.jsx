import '../../sass/Header.scss'
import HeaderLogo from '../../assets/sportSee-logo.svg'
import Navigation from './Navigation'

function Header() {
    return(
        <div className="headerWrapper">
            <div className="logoContainer"><img src={HeaderLogo} alt="Logo SportSee" /></div>
            <Navigation />
        </div>
    )
}

export default Header