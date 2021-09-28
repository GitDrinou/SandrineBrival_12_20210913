import '../sass/profile.scss'
import { useParams } from 'react-router-dom'
import Banner from '../components/common/Banner'
import ProfilHeader from '../components/common/ProfilHeader'
import Graphics from '../components/Graphics'
import KeyDatas from '../components/KeyDatas'
import { ENDPOINT_ACTIVITY, ENDPOINT_AVERAGE, ENDPOINT_PERFORMANCE, ENDPOINT_USER } from '../utils/constant/global_variables'
import { useAPIFetch } from '../utils/hooks/useAPIFetch'

/**
 * PAGE COMPONENT : This component function display the two parts of the profil's page 
 * @returns The graphics and key datas of the user define by the param's link (useParams)
 */
function Profile() {

    const { idUser } = useParams()

    const {dataUser, error} = useAPIFetch(idUser,'')

    if (error) {
        return (
            <div className="errorUser"> 
                <p>Oups ! Il y a eu un problème</p>
                { (dataUser.length === 0) ? (
                    <p>Utilisateur inconnu</p>
                ) :
                ( 
                    <p>Erreur dans l'accès aux données</p>
                )}
            </div>
        )
    }  


    return (
        <div className="dashbWrapper">
            <Banner />
            <div className="dashContainer">
                <ProfilHeader 
                    idUser={idUser}                    
                />
                <div className="datasWrapper">
                    <Graphics                 
                        idUser={idUser}
                        endPointActivity = {ENDPOINT_ACTIVITY}
                        endPointAverage = {ENDPOINT_AVERAGE}
                        endPointPerformance = {ENDPOINT_PERFORMANCE}                
                        endPointGoal = {ENDPOINT_USER}
                    />
                    <KeyDatas 
                        idUser={idUser}
                        endPointKey = {ENDPOINT_USER}
                    />
                </div>
            </div>
             
        </div>
    )
}

export default Profile