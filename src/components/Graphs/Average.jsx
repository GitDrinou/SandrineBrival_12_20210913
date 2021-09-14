import { useFetch } from '../../utils/hooks/useFetch'
import { LineChart, XAxis, Tooltip, Legend, Line, YAxis } from 'recharts'
import '../../sass/GraphAverage.scss'

function Average() {

    const { data } = useFetch('./datas/average.json')
    const averageData = data?.sessions

    //console.log(averageData)

    return (
        <div className="averageContainer">
            <LineChart width={263} height={238} data={averageData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis data="day" tick={{ fill: '#FFFFFF'}} />
                <YAxis data="sessionLength" hide="true" />
                <Tooltip s/>
                <Legend verticalAlign="top" align="left" width={190} heigth={50} iconSize={0} fill="" />
                <Line type="monotone" dataKey="sessionLength" strokeDashArray="0" stroke="#FFFFFF" strokeWidth={2} dot={false}  name="Durée moyenne des sessions" />                
            </LineChart>
        </div>
    )
}

export default Average