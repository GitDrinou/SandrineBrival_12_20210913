import '../sass/profile.scss'
import Banner from '../components/common/Banner'
import ProfilHeader from '../components/common/ProfilHeader'
import ProfilDatas from '../components/ProfilDatas'

function Profile() {

    return (
        <div className="dashbWrapper">
            <Banner />
            <div className="dashContainer">
                <ProfilHeader />
                <ProfilDatas />
            </div>
             
        </div>
    )
}

export default Profile