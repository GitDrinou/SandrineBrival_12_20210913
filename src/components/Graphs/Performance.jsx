import { useFetch } from '../../utils/hooks/useFetch'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import '../../sass/GraphPerformance.scss'

function Performance() {

    const { data } = useFetch('./datas/performances.json')
    const performanceData = data?.data

    //console.log(performanceData)
    
    return (
        <div className="performContainer">
            <RadarChart outerRadius={90} width={263} height={238} cx="50%" cy="50%" data={performanceData} startAngle={90}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF'}} />
                <Radar dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </div>
    )
}

export default Performance