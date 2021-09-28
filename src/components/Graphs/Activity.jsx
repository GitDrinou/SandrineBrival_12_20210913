import { Loader } from "../../utils/style/Loader"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import { GRAPH_ACTIVITY_WIDTH, GRAPH_ACTIVITY_HEIGHT, GRAPH_BAR_ORD1_COLOR, GRAPH_BAR_ORD2_COLOR,GRAPH_BAR_ORD1_NAME,GRAPH_BAR_ORD2_NAME } from "../../utils/constant/global_variables"
import '../../sass/GraphActivity.scss'

/**
 * GRAPHIC COMPONENT : This component function display the Activity's bar chart
 * @param {array} activities This array contains <br>
 * - (string) "day" as abs 
 * - (number) "kilogram" as ord1 
 * - (number) "calories" as ord2 
 * @param {boolean} isLoading It indicate if the data is loading or not
 * @returns the componant recharts BarChart. <br>
 * Using different global variables : <br>
 * - GRAPH_ACTIVITY_WIDTH : the graph's width
 * - GRAPH_ACTIVITY_HEIGHT : the graph's height
 * - GRAPH_BAR_ORD1_COLOR : the ord1's color
 * - GRAPH_BAR_ORD2_COLOR : the ord2's color
 * - GRAPH_BAR_ORD1_NAME : the ord1's label for the chart's legend
 * - GRAPH_BAR_ORD2_NAME : the ord2's label for the chart's legend
 */

function Activity({activities, isLoading}) {
  
    const CustomBarChartTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-BarChartTooltip">
                    { isLoading  ? (
                    <Loader />
                    ) : (
                        <div>
                            <p>{`${payload[0].value}`}kg </p>
                            <p>{`${payload[1].value}`}kCal </p>
                        </div>                        
                    )}
                </div>
            )
        }
    
        return null;
    }

    return (
        <div className="activityWrapper">
            <h1>Activités quotidiennes</h1>
            { isLoading  ? (
                    <Loader />
            ) : (
                <BarChart width={GRAPH_ACTIVITY_WIDTH} height={GRAPH_ACTIVITY_HEIGHT} data={activities} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="abs" padding={{ left: 20, right: 20 }} />
                    <YAxis yAxisId="0" dataKey="ord1" orientation='right' domain={['dataMin-6', 'dataMax+6']} />
                    <YAxis yAxisId="1" type="number" dataKey="ord2" hide='true' allowDataOverflow='false' />
                    <Tooltip content={<CustomBarChartTooltip />} />
                    <Legend verticalAlign="top" align="right" width={270} heigth={50} iconSize={8} iconType="circle" />
                    <Bar yAxisId="0" dataKey="ord1" fill={GRAPH_BAR_ORD1_COLOR} barSize={10} name={GRAPH_BAR_ORD1_NAME} />
                    <Bar yAxisId="1" dataKey="ord2" fill={GRAPH_BAR_ORD2_COLOR} barSize={10} name={GRAPH_BAR_ORD2_NAME}  />
                </BarChart>  
            )}
        </div>        
    )
}
export default Activity