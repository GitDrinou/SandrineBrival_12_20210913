import '../sass/profile.scss'
import { useParams } from 'react-router-dom'
import Banner from '../components/common/Banner'
import ProfilHeader from '../components/common/ProfilHeader'
import ProfilDatas from '../components/ProfilDatas'
import { URL_DATA_USER, URL_DATA_ACTIVITY, URL_DATA_AVERAGE, URL_DATA_PERFORMANCE } from '../utils/constant/global_variables'

function Profile() {

    const { idUser } = useParams()

    return (
        <div className="dashbWrapper">
            <Banner />
            <div className="dashContainer">
                <ProfilHeader 
                    idUser={idUser} 
                    url = {URL_DATA_USER}
                />
                <ProfilDatas
                    idUser={idUser} 
                    urlGraphActivity = {URL_DATA_ACTIVITY}
                    urlGraphAverage = {URL_DATA_AVERAGE}
                    urlGraphPerformance = {URL_DATA_PERFORMANCE}
                    urlGraphGoal = {URL_DATA_USER}
                    urlKeyDatas = {URL_DATA_USER}
                />
            </div>
             
        </div>
    )
}

export default Profile