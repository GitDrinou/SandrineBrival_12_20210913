import { Loader } from "../../utils/style/Loader"
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { GRAPHLIST_WIDTH, GRAPHLIST_HEIGHT, GRAPH_GOAL_COLORS } from '../../utils/constant/global_variables'
import '../../sass/GraphGoal.scss'


/**
 * GRAPHIC COMPONENT : This component function display the Goal's Pie chart
 * @param {(property|array)} goals This array contains 2 items <br>
 * - (number) "objectif" : item 0 - value of the actual goal
 * - (number) "objectif" : item 1 - difference between the actual goal and the max goal (default 100)
 * @param {(property|number)} actualGoal This value is for the legend and equal to the item 0 of the goals array
 * @param {(property|boolean)} isLoading It indicate if the data is loading or not
 * @returns the componant recharts PieChart. <br>
 * - GRAPHLIST_WIDTH : the graph's width
 * - GRAPHLIST_HEIGHT : the graph's height
 * - GRAPH_GOAL_COLORS : the graph's colors
 */
function Goal({goals, actualGoal, isLoading}) {

    const renderLegend = () => {
    
        return (
            <div className="goalLegend">
                { isLoading  ? (
                    <Loader />
                ) : (
                    <div>
                        <span>{actualGoal}%</span>
                        <span><br/> de votre objectif</span>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="goalContainer">
                <div>
                    <span className="graphTitle">Score</span>
                    { isLoading  ? (
                        <Loader />
                    ) : (
                       <PieChart width={GRAPHLIST_WIDTH} height={GRAPHLIST_HEIGHT-24}>
                        <Pie
                            dataKey='objectif'
                            isAnimationActive={true}
                            data={goals}
                            cx="50%"
                            cy="50%"
                            innerRadius={75} 
                            outerRadius={90}
                            labelLine={false}                        
                            paddingAngle={10}
                            startAngle={90}
                            endAngle={450}
                        >
                            {goals.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={GRAPH_GOAL_COLORS[index % GRAPH_GOAL_COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend content={renderLegend} verticalAlign="middle" align="center" />
                    </PieChart>
                    )}
                </div>
        </div>
    )
}

export default Goal