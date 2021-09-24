import ErrorIllustration from '../assets/404-illustration.svg'
import {useHistory} from "react-router-dom"
import '../sass/Error.scss'


function Error() {

    const history = useHistory()

    return (
        <div className="errorWrapper">
            <img src={ErrorIllustration} alt="Erreur 404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <button onClick={() => history.goBack()} >Retour à la page précédente</button>
        </div>
    )
}

export default Error