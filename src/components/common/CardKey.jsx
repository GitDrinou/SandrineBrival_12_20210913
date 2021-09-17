import CalorieIcon from '../../assets/calories-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import GlucideIcon from '../../assets/carbs-icon.svg'
import LipideIcon from '../../assets/fat-icon.svg'

function CardKey({type, dataValue}) {

    let illustration, unit
    //console.log(type)
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
            illustration = GlucideIcon
            unit = 'g'
            break
        case 'Lipides':  
            illustration = LipideIcon
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