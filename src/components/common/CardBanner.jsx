import YogaIcon from '../../assets/yoga-icon.png'
import SwimmingIcon from '../../assets/swimming-icon.png'
import BikingIcon from '../../assets/cyclist-icon.png'
import BodybuildingIcon from '../../assets/dumbbell-icon.png'

/**
 * COMMON COMPONENT : This component function display an icon image
 * @param {(property|string)} description the description of the icon image (ex: Swimming, Cycling,..)
 * @returns the icon image
 */
function CardBanner({description}) {

    let picture

    switch(description) {
        case 'Yoga': 
            picture = YogaIcon
            break
        case 'Swimming': 
            picture = SwimmingIcon
            break
        case 'Cycling': 
            picture = BikingIcon
            break
        case 'Bodybuilding':  
            picture = BodybuildingIcon
            break
        default: break
    }
    
    return (
        <li>
            <img src={picture} alt={description}/>
        </li>
    )
}

export default CardBanner