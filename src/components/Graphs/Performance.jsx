import { useFetch } from '../../utils/hooks/useFetch'
import { setLabel } from '../../utils/function/setFunction'
import { graphPerformanceData } from '../../utils/function/graphFunction'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT } from '../../utils/constant/global_variables'
import '../../sass/GraphPerformance.scss'

function Performance({idUser,urlGraphPerformance}) {

    const { data, isLoading, error } = useFetch(urlGraphPerformance)
    const performanceData = data?.data
    const performanceLabel = data?.kind
  
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  

    const newPerformance = setLabel(performanceLabel, performanceData)

    const graphRadarDatas = []
    for(let item in newPerformance) {
        graphRadarDatas.push(graphPerformanceData(newPerformance[item].labelKind, newPerformance[item].value))
    }
    
    return (    
        <div className="performContainer">
            { isLoading  ? (
                    <div>Chargement en cours...</div>
            ) : (
                <RadarChart 
                    outerRadius={90} 
                    width={GRAPHLIST_WIDTH} 
                    height={GRAPHLIST_HEIGHT} 
                    cx="50%" 
                    cy="50%" 
                    data={graphRadarDatas} 
                    startAngle={90}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="angle" tick={{ fill: 'white', fontSize: 12}}  />
                    <Radar dataKey="radar" stroke="#8884d8" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            )}
        </div>
    )
}

export default Performance