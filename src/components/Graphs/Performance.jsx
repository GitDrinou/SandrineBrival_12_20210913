import { useFetch } from '../../utils/hooks/useFetch'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT } from '../../utils/constant/global_variables'
import '../../sass/GraphPerformance.scss'

function Performance() {

    const { data, isLoading, error } = useFetch('./datas/performances.json')
    const performanceData = data?.data
    const performanceKind = data?.kind


    
        
    if (error) {
        return <span>Oups il y a eu un problème</span>
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
                    data={performanceData} 
                    startAngle={90}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF' }} />
                    <Radar dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            )}
        </div>
    )
}

export default Performance