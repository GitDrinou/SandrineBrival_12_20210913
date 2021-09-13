import { useFetch } from '../../utils/hooks/useFetch'
import { LineChart, XAxis, Tooltip, Legend, Line } from 'recharts'
import '../../sass/Graphics.scss'

function Average() {

    const { data } = useFetch('./datas/average.json')
    const averageData = data?.sessions

    console.log(averageData)

    return (
        <div className="averageContainer">
            <LineChart width={263} height={238} data={averageData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <XAxis data="day" tick={{ fill: '#FFFFFF'}} stroke={1} />
                <Tooltip />
                <Legend verticalAlign="top" align="left" width={100} heigth={50} iconSize={0} iconType="circle" />
                <Line type="monotone" dataKey="sessionLength" strokeDashArray="0" stroke="#FFFFFF" strokeWidth={2} dot={false}  name="Durée moyenne des sessions" />                
            </LineChart>
        </div>
    )
}

export default Average