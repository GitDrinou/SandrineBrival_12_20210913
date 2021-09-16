import '../sass/KeyDatas.scss'
import { useFetch } from '../utils/hooks/useFetch'
import { getKeyData } from '../utils/functions'
import Card from '../components/common/Card'
// import CaloriesIcon from '../assets/calories-icon.svg'
// import ProteinIcon from '../assets/protein-icon.svg'
// import CarbsIcon from '../assets/carbs-icon.svg'
// import FatIcon from '../assets/fat-icon.svg'



function KeyDatas() {

    const { data, isLoading, error } = useFetch('./datas/user.json')
    
    const keyDatas = getKeyData(data?.keyData, isLoading)

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  

    return(
        <div className="keyContainer">
            <ul className="keysDataList">
                { isLoading  ? (
                    <div>Chargement en cours...</div>
                ) : (
                    keyDatas && keyDatas.map((item, index)=> 
                    //console.log(Object.keys(item), Object.values(item))
                    <Card 
                        key={`${Object.keys(item)}-${index}`}
                        type={Object.keys(item)}
                        dataValue= {Object.values(item)}
                    />
                ))}             
            </ul>
            {/* 
                

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
            </ul>  */}
        </div>
    )
}

export default KeyDatas