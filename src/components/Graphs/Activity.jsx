import { useFetch } from '../../utils/hooks/useFetch'
import { graphActivityData } from '../../utils/function/graphFunction'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import '../../sass/GraphActivity.scss'


function Activity({idUser,urlGraphActivity}) {

    const { data, isLoading, error } = useFetch(urlGraphActivity)
    const activityData = data?.sessions

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  
        
    const graphBarDatas = []
    for(let item in activityData) {
        graphBarDatas.push(graphActivityData(activityData[item].day, activityData[item].kilogram, activityData[item].calories))
    }
    
    const CustomBarChartTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-BarChartTooltip">
                    <p>{`${payload[0].value}`}kg </p>
                    <p>{`${payload[1].value}`}kCal </p>
                </div>
            )
        }
    
        return null;
    }

    return (
        <div className="activityWrapper">
            { isLoading  ? (
                    <div>Chargement en cours...</div>
            ) : (
                <div>
                   <h1>Activités quotidiennes</h1>
                    <BarChart width={835} height={320} data={graphBarDatas} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="abs" padding={{ left: 20, right: 20 }} />
                        <YAxis yAxisId="0" dataKey="ord1" orientation='right' domain={['dataMin-6', 'dataMax+6']} />
                        <YAxis yAxisId="1" type="number" dataKey="ord2" hide='true' allowDataOverflow='false' />
                        <Tooltip content={<CustomBarChartTooltip />} />
                        <Legend verticalAlign="top" align="right" width={270} heigth={50} iconSize={8} iconType="circle" />
                        <Bar yAxisId="0" dataKey="ord1" fill="#282D30" barSize={10} name="Poids (kg)" />
                        <Bar yAxisId="1" dataKey="ord2" fill="#E60000" barSize={10} name="Calories brûlées (kCal)"  />
                    </BarChart>  
                </div>               
            )}
        </div>
        
    )
}
export default Activity