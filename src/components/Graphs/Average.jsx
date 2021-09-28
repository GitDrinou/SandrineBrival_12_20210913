import { Loader } from "../../utils/style/Loader"
import { LineChart, XAxis, Tooltip, Legend, Line, YAxis } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT } from '../../utils/constant/global_variables'
import '../../sass/GraphAverage.scss'

/**
 * GRAPHIC COMPONENT : This component function display the Average's line chart
 * @param {(property|array)} averages This array contains <br>
 * - (string) "day" as abs 
 * - (number) "sessionLength" as ord
 * @param {(property|boolean)} isLoading It indicate if the data is loading or not
 * @returns the componant recharts LineChart. <br>
 * - GRAPHLIST_WIDTH : the graph's width
 * - GRAPHLIST_HEIGHT : the graph's height
 */
function Average({averages, isLoading}) {

    const CustomLineChartTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-LineChartTooltip">
                    { isLoading  ? (
                    <Loader />
                    ) : (
                        <div>
                            <p>{`${payload[0].value}`} min</p>
                        </div>
                    )}
                </div>
            )
        }
    
        return null;
    }

    const renderLegend = () => {
    
        return (
            <div className="custom-legend">
                <p>Durée moyenne des sessions</p>
            </div>
        )
    }

    return (
        <div className="averageContainer">
            { isLoading  ? (
                    <Loader />
            ) : (
                <LineChart width={GRAPHLIST_WIDTH} height={GRAPHLIST_HEIGHT} data={averages} margin={{ top: 0, right: 5, left: 5, bottom: 5 }}>
                    <XAxis dataKey="abs" tick={{fill:"white"}} padding={{ left: 5, right: 5 }} />
                    <YAxis dataKey="ord" hide="true" />
                    <Tooltip content={<CustomLineChartTooltip />} />
                    <Line type="monotone" dataKey="ord" strokeDashArray="0" strokeWidth={2} dot={false} unit="min" stroke="white" animationBegin={0} activeDot={{ stroke: 'white', strokeWidth: 2, fill: 'white', r: 3 }} />
                    <Legend verticalAlign="top" align="left" content={renderLegend}  />                
                </LineChart>
            )}
        </div>
    )
}

export default Average