import { LineChart, XAxis, Tooltip, Legend, Line, YAxis } from 'recharts'
import '../../sass/GraphAverage.scss'

function Average({idUser, averages}) {

    const CustomLineChartTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-LineChartTooltip">
                    <p>{`${payload[0].value}`} min</p>
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
            <LineChart width={263} height={238} data={averages} margin={{ top: 0, right: 5, left: 5, bottom: 5 }}>
                <XAxis dataKey="abs" tick={{fill:"white"}} padding={{ left: 5, right: 5 }} />
                <YAxis dataKey="ord" hide="true" />
                <Tooltip content={<CustomLineChartTooltip />} />
                <Line type="monotone" dataKey="ord" strokeDashArray="0" strokeWidth={2} dot={false} unit="min" stroke="white" animationBegin={0} activeDot={{ stroke: 'white', strokeWidth: 2, fill: 'white', r: 3 }} />
                <Legend verticalAlign="top" align="left" content={renderLegend}  />                
            </LineChart>
        </div>
    )
}

export default Average