import '../../sass/profile.scss'
import { useAPIFetch } from '../../utils/hooks/useAPIFetch'

/**
 * COMMON COMPONENT : This component function display the welcome message on the profil's page
 * @param {string} idUser the user id selected
 * @returns The personalized Welcome message with the firstName's user and congratulations text
 */

function ProfilHeader({idUser}) {

    const { dataUser, isLoading } = useAPIFetch(idUser, '')

    return(
        <div className="profilHeader-wrapper">
            { isLoading  ? (
                    <div>Chargement en cours...</div>
            ) : (
                <div>
                    <h1>Bonjour <span className="userName">{dataUser.firstName}</span></h1>
                    <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
                </div>                
            )}
        </div>
    )
}

export default ProfilHeader