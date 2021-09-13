import YogaIcon from '../../assets/iconYoga.png'
import SwimmingIcon from '../../assets/iconSwim.png'
import CyclingIcon from '../../assets/iconBike.png'
import GymIcon from '../../assets/iconGym.png'


function Banner() {
    return (
        <div className="bannerWrapper">
            <div>
                <ul className="pictoList">
                    <li><img src={YogaIcon} alt="Yoga icon" /></li>
                    <li><img src={SwimmingIcon} alt="Swimming icon" /></li>
                    <li><img src={CyclingIcon} alt="Cycling icon" /></li>
                    <li><img src={GymIcon} alt="Gym icon" /></li>
                </ul> 
            </div>
                      
            <div className="copyright">Copiryght, SportSee 2020</div>
        </div>
    )
}

export default Banner