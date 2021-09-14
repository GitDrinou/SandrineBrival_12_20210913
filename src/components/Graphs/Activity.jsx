import { useFetch } from '../../utils/hooks/useFetch'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import '../../sass/GraphActivity.scss'


function Activity() {

    const { data } = useFetch('./datas/activity.json')
    const activityData = data?.sessions
        
    //console.log(activityData);

    return (
        <div className="activityWrapper">
            <h1>Activités quotidiennes</h1>
            <BarChart width={835} height={320} data={activityData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day"/>
                <YAxis yAxisId="0" dataKey="kilogram" orientation='right' domain={['dataMin-6', 'dataMax+6']} />
                <YAxis yAxisId="1" type="number" dataKey="calories" hide='true' allowDataOverflow='false' />
                <Tooltip wrapperStyle={{ top: -50, left: 50 }} />
                <Legend verticalAlign="top" align="right" width={270} heigth={50} iconSize={8} iconType="circle" />
                <Bar yAxisId="0" dataKey="kilogram" fill="#282D30" barSize={10} name="Poids (kg)" />
                <Bar yAxisId="1" dataKey="calories" fill="#E60000" barSize={10} name="Calories brûlées (kCal)"  />
            </BarChart>
        </div>
        
    )
}
export default Activity