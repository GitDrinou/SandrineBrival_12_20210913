import Graphics from './Graphics'
import KeyDatas from './KeyDatas'

function ProfilDatas({idUser,urlGraphActivity,urlGraphAverage,urlGraphPerformance,urlGraphGoal,urlKeyDatas}) {
    return (
        <div className="datasWrapper">
            <Graphics                 
                idUser={idUser}
                urlGraphActivity = {urlGraphActivity}
                urlGraphAverage = {urlGraphAverage}
                urlGraphPerformance = {urlGraphPerformance}                
                urlGraphGoal = {urlGraphGoal}
            />
            <KeyDatas 
                idUser={idUser}
                urlKeyDatas = {urlKeyDatas}
            />
        </div>
    )
}

export default ProfilDatas