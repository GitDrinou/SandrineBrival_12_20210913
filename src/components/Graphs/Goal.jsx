import { useFetch } from '../../utils/hooks/useFetch'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT, GRAPH_GOAL_COLORS } from '../../utils/constant/global_variables'
import '../../sass/GraphGoal.scss'

function Goal() {

    const { data, isLoading, error } = useFetch('./datas/user.json')
    const goalData = [{"objectif" : data["todayScore"]*100}]
    goalData.push({"objectif" : 100-data["todayScore"]*100})
    const actualGoal =  data["todayScore"]*100
    
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  

    const renderLegend = () => {
        
        return (
            <div className="goalLegend">
                <span>{actualGoal}%</span>
                <span><br/> de votre objectif</span>
            </div>
        )
    }

    return (
        <div className="goalContainer">
            { isLoading  ? (
                    <div>Chargement en cours...</div>
            ) : (
                <div>
                    <span className="graphTitle">Score</span>
                    <PieChart width={GRAPHLIST_WIDTH} height={GRAPHLIST_HEIGHT-24}>
                    <Pie
                        dataKey="objectif"
                        isAnimationActive={true}
                        data={goalData}
                        cx="50%"
                        cy="50%"
                        innerRadius={75} 
                        outerRadius={90}
                        labelLine={false}                        
                        paddingAngle={10}
                        startAngle={90}
                        endAngle={450}
                    >
                        {goalData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={GRAPH_GOAL_COLORS[index % GRAPH_GOAL_COLORS.length]} />
                          ))}
                    </Pie>
                    <Legend content={renderLegend} verticalAlign="middle" align="center" />
                </PieChart>
                </div>
                
            )}
        </div>
    )
}

export default Goal