import '../sass/dashboard.scss'
import Banner from './common/Banner'
import ProfilHeader from './common/ProfilHeader'
import ProfilDatas from './ProfilDatas'

function Dashboard() {
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

export default Dashboard