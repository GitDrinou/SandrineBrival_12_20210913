import YogaIcon from '../../assets/iconYoga.png'
import SwimmingIcon from '../../assets/iconSwim.png'
import BikingIcon from '../../assets/iconBike.png'
import GymnasticIcon from '../../assets/iconGym.png'

function CardBanner({description}) {

    let picture

    switch(description) {
        case 'Yoga': 
            picture = YogaIcon
            break
        case 'Swimming': 
            picture = SwimmingIcon
            break
        case 'Biking': 
            picture = BikingIcon
            break
        case 'Gymnastic':  
            picture = GymnasticIcon
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