import { useAPIFetch } from '../utils/hooks/useAPIFetch'
import { graphActivityData, graphAverageData,graphPerformanceData } from '../utils/function/graphFunction'
import { setLabel } from '../utils/function/setFunction'
import Activity from './Graphs/Activity'
import Average from './Graphs/Average'
import Performance from './Graphs/Performance'
import Goal from './Graphs/Goal'
import '../sass/Graphics.scss'


function Graphics({idUser,endPointActivity,endPointAverage,endPointPerformance, endPointGoal}) {

  const { dataActivity } = useAPIFetch(idUser,endPointActivity)
  const { dataAverage } = useAPIFetch(idUser,endPointAverage)
  const { dataPerformance } = useAPIFetch(idUser,endPointPerformance)
  const { dataGoal, isLoading } = useAPIFetch(idUser,endPointGoal)

  // Create an array for Bar Chart with activity datas
  const graphBarDatas = []
  for(let item in dataActivity) {
    graphBarDatas.push(graphActivityData(dataActivity[item].day, dataActivity[item].kilogram, dataActivity[item].calories))
  }  

  // Create an array for Line with average datas
  const graphLineDatas = []
  for(let item in dataAverage) {
      graphLineDatas.push(graphAverageData(dataAverage[item].day, dataAverage[item].sessionLength))
  }

  // Create an array for match kind label with value of Performance datas
  const performanceLabel = dataPerformance?.kind
  const newPerformance = setLabel(performanceLabel, dataPerformance?.data)

  // Create an array for Radar with performance datas
  const graphRadarDatas = []
  for(let item in newPerformance) {
      graphRadarDatas.push(graphPerformanceData(newPerformance[item].labelKind, newPerformance[item].value))
  }

  // Create an array for Pile Chart with user todayScore        
  const arrData = [{"objectif" : dataGoal*100}]
  arrData.push({"objectif" : 100-dataGoal*100})
  const actualGoal =  dataGoal*100

  return (
    <div className="graphWrapper">     
      <Activity 
        idUser={idUser}
        activities = {graphBarDatas}
        isLoading = {isLoading}
      />
      <div className="graphList">
        <Average 
          idUser={idUser}
          averages = {graphLineDatas}
          isLoading = {isLoading}
        />
        <Performance 
          idUser={idUser}
          performances = {graphRadarDatas}
          isLoading = {isLoading}
        />
        <Goal  
          idUser={idUser}
          goals = {arrData}
          actualGoal = {actualGoal}
          isLoading = {isLoading}
        />
      </div>
    </div>
  )
}

export default Graphics;
