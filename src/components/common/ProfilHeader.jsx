import '../../sass/profile.scss'
import { useFetch } from '../../utils/hooks/useFetch'

function ProfilHeader({idUser, url}) {

    const { data, isLoading, error } = useFetch(url)

    const userDatas = data?.userInfos

    if (error) {
        return <span>Oups il y a eu un problème</span>
    } 

    return(
        <div className="profilHeader-wrapper">
            { isLoading  ? (
                    <div>Chargement en cours...</div>
            ) : (
                <div>
                    <h1>Bonjour <span className="userName">{userDatas.firstName}</span></h1>
                    <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
                </div>                
            )}
        </div>
    )
}

export default ProfilHeader