import Activity from './Graphs/Activity'
import Average from './Graphs/Average'
import Performance from './Graphs/Performance'
import Goal from './Graphs/Goal'
import '../sass/Graphics.scss'


function Graphics({idUser,urlGraphActivity,urlGraphAverage,urlGraphPerformance, urlGraphGoal}) {
  return (
    <div className="graphWrapper">      
        <Activity 
          idUser={idUser}
          urlGraphActivity = {urlGraphActivity}
        />
        <div className="graphList">
          <Average 
            idUser={idUser}
            urlGraphAverage = {urlGraphAverage}
          />
          <Performance 
            idUser={idUser}
            urlGraphPerformance = {urlGraphPerformance}
          />
          <Goal  
            idUser={idUser}
            urlGraphGoal = {urlGraphGoal}
          />
        </div>
    </div>
  );
}

export default Graphics;
