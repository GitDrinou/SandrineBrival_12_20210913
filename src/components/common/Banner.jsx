import { useFetch } from '../../utils/hooks/useFetch'
import { URL_JSON_BANNER } from '../../utils/constant/global_variables'
import CardBanner from './CardBanner'

/**
 * <em>COMMON COMPONENT</em><br>
 * This component function display a list of different sports's icons<br>
 * Using a personalized hooks : useFetch
 * @returns a child component with : <br>
 * - the unique key : (string)-(number)
 * - the description of the icon (string). Example: "Cycling"
 */
function Banner() {

    const { data, isLoading, error } = useFetch(URL_JSON_BANNER)

    const bannerIcons = data?.icons 

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  

    return (
        <div className="bannerWrapper">
            <div>
                <ul className="pictoList">
                    { isLoading  ? (
                        <div>Chargement en cours...</div>
                    ) : (
                        bannerIcons && bannerIcons.map((item, index)=> 
                        
                        <CardBanner 
                            key={`${item.id}-${index}`}
                            description={item.description}
                        />
                    ))}  
                </ul> 
            </div>
                      
            <div className="copyright">Copyright, SportSee 2020</div>
        </div>
    )
}


export default Banner