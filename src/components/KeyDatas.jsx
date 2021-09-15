import '../sass/KeyDatas.scss'
import { useFetch } from '../utils/hooks/useFetch'
import CaloriesIcon from '../assets/calories-icon.svg'
import ProteinIcon from '../assets/protein-icon.svg'
import CarbsIcon from '../assets/carbs-icon.svg'
import FatIcon from '../assets/fat-icon.svg'


function KeyDatas() {

    const { data } = useFetch('./datas/user.json')

    let calorieCount, proteinCount, carbCount, lipidCount

    Object.getOwnPropertyNames(data).forEach((key) => {
        let keyData = data[key];
        calorieCount = keyData.calorieCount
        proteinCount = keyData.proteinCount
        carbCount = keyData.carbohydrateCount
        lipidCount = keyData.lipidCount
      })

      
    return(
        <div className="keyContainer">
            <ul className="keysDataList">
                <li>
                    <div>
                        <img src={CaloriesIcon} alt="Calories icon" className="keyPic"/>
                        <div className="keyContent">
                            <span>{calorieCount}kCal</span>
                            <span>Calories</span>                        
                        </div>
                    </div>                    
                </li>
                <li>
                    <div>
                        <img src={ProteinIcon} alt="Protein icon" className="keyPic"/>
                        <div className="keyContent">
                            <span>{proteinCount}g</span>
                            <span>Protéines</span>                        
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={CarbsIcon} alt="Carbs icon" className="keyPic"/>
                        <div className="keyContent">
                            <span>{carbCount}g</span>
                            <span>Glucides</span>                        
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={FatIcon} alt="Lipid icon" className="keyPic"/>
                        <div className="keyContent">
                            <span>{lipidCount}g</span>
                            <span>Lipides</span>                        
                        </div>
                    </div>
                </li>
            </ul> 
        </div>
    )
}

export default KeyDatas