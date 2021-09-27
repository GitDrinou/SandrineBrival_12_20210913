import CalorieIcon from '../../assets/calorie-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import CarbIcon from '../../assets/carb-icon.svg'
import LipidIcon from '../../assets/lipid-icon.svg'

/**
 * <em>COMMON COMPONENT</em><br>
 * This component function display the different keys data of the user's profile
 * @param {string} type This is the key label
 * @param {object} dataValue This is the key value
 * @returns It returns a block with different informations : <br>
 * - the illustration
 * - the value and unit of the data
 * - the label of the key data
 */
function CardKey({type, dataValue}) {

    let illustration, unit
    
    switch(type[0]) {
        case 'Calories': 
            illustration = CalorieIcon
            unit= 'kCal'
            break
        case 'Protéines': 
            illustration = ProteinIcon
            unit = 'g'
            break
        case 'Glucides': 
            illustration = CarbIcon
            unit = 'g'
            break
        case 'Lipides':  
            illustration = LipidIcon
            unit = 'g'
            break
        default: break
    }


    return (
        <li>
            <div>
                <img src={illustration} alt={type} className="keyPic"/>
                <div className="keyContent">
                    <span>{dataValue}{unit}</span>
                    <span>{type}</span>                        
                </div>
            </div>                    
        </li>
    )
}

export default CardKey