import '../sass/profile.scss'
import { useParams } from 'react-router-dom'
import Banner from '../components/common/Banner'
import ProfilHeader from '../components/common/ProfilHeader'
import Graphics from '../components/Graphics'
import KeyDatas from '../components/KeyDatas'
import { ENDPOINT_ACTIVITY, ENDPOINT_AVERAGE, ENDPOINT_PERFORMANCE, ENDPOINT_USER } from '../utils/constant/global_variables'

function Profile() {

    const { idUser } = useParams()

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