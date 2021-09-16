import { useFetch } from '../../utils/hooks/useFetch'
import { PieChart, Pie, Legend } from 'recharts'
import '../../sass/GraphGoal.scss'

function Goal() {

    const { data } = useFetch('./datas/user.json')
    const goalData = []
    goalData.push({"objectif" : data["todayScore"]*100})
    const padAngle = 100-data["todayScore"]*100
    const actualGoal = data["todayScore"]*100
   
    
    //console.log(data)
    //console.log(goalData)
    
    
    return (
        <div className="goalContainer">
            <PieChart width={263} height={238}>
                <Pie
                    id="Pie01"
                    dataKey="objectif"
                    isAnimationActive={true}
                    data={goalData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70} outerRadius={90}
                    fill="#FF0000"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={padAngle}
                />
                <Legend 
                    name={actualGoal} 
                    verticalAlign="middle" 
                    iconSize={0} 
                    align="center" 
                    width={90} 
                    payload={[{ value: `${actualGoal}% de votre objectif`, type: '', color: '' }]}
                />
            </PieChart>
        </div>
    )
}

export default Goal