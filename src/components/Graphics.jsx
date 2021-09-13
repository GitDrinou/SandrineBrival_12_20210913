import Activity from './Graphs/Activity'
import Average from './Graphs/Average'


function Graphics() {
  return (
    <div className="graphWrapper">      
        <Activity />
        <div className="graphList">
          <Average />
        </div>
    </div>
  );
}

export default Graphics;
