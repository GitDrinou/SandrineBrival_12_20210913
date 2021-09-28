import { Loader } from "../../utils/style/Loader"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT, GRAPH_RADAR_STROKE_COLOR, GRAPH_RADAR_FILL_COLOR } from '../../utils/constant/global_variables'
import '../../sass/GraphPerformance.scss'

/**
 * GRAPHIC COMPONENT : This component function display the Performance's Radar chart
 * @param {array} performances This array contains : <br>
 * - (string) "kind" as angle  : kind's label
 * - (number) "value" as radar
 * @param {boolean} isLoading It indicate if the data is loading or not
 * @returns the componant recharts RadarChart. <br>
 * - GRAPHLIST_WIDTH : the graph's width
 * - GRAPHLIST_HEIGHT : the graph's height
 * - GRAPH_RADAR_STROKE_COLOR : the graph's stroke color
 * - GRAPH_RADAR_FILL_COLOR : the graph's fill color
 */
function Performance({performances, isLoading}) {
    
    return (    
        <div className="performContainer">
            { isLoading  ? (
                    <Loader />
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
                    <Radar dataKey="radar" stroke={GRAPH_RADAR_STROKE_COLOR} fill={GRAPH_RADAR_FILL_COLOR} fillOpacity={0.7} />
                </RadarChart>
            )}
        </div>
    )
}

export default Performance