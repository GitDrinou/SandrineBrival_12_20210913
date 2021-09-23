import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT } from '../../utils/constant/global_variables'
import '../../sass/GraphPerformance.scss'

function Performance({idUser,performances, isLoading}) {

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
                    data={performances} 
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