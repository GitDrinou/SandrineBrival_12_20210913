import { useFetch } from '../../utils/hooks/useFetch'
import { PieChart, Pie, Legend, Tooltip } from 'recharts'
import '../../sass/GraphGoal.scss'

function Goal() {

    const { data } = useFetch('./datas/user.json')
    const goalData = []
    goalData.push({"objectif" : 100-data["todayScore"]*100})
    const padAngle = 100-data["todayScore"]*100
    
    //console.log(data)
    //console.log(goalData)
    
    return (
        <div className="goalContainer">
            <PieChart width={263} height={238}>
                <Pie
                    dataKey="objectif"
                    isAnimationActive={true}
                    data={goalData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70} outerRadius={90}
                    fill="#FF0000"
                    label
                    startAngle={-180}
                    endAngle={360}
                    paddingAngle={padAngle}
                />

                <Tooltip />
                <Legend verticalAlign="middle" />
            </PieChart>
        </div>
    )
}

export default Goal