import Activity from './Graphs/Activity'
import Average from './Graphs/Average'
import Performance from './Graphs/Performance'
import Goal from './Graphs/Goal'
import '../sass/Graphics.scss'


function Graphics() {
  return (
    <div className="graphWrapper">      
        <Activity />
        <div className="graphList">
          <Average />
          <Performance />
          <Goal />
        </div>
    </div>
  );
}

export default Graphics;
