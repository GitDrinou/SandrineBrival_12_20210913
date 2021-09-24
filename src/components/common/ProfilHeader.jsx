import '../../sass/profile.scss'
import { useAPIFetch } from '../../utils/hooks/useAPIFetch'

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