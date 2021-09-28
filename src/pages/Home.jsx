import WomanIllustration from '../assets/avatar-woman.svg'
import ManIllustration from '../assets/avatar-man.svg'
import { useFetch } from '../utils/hooks/useFetch'
import { URL_JSON_HOME } from '../utils/constant/global_variables'
import { Link } from 'react-router-dom'
import '../sass/Home.scss'

/**
 * PAGE COMPONENT : This component function display a temporary user profile selection for testing the profil's page and the API calls
 * @returns A block selection with 2 choices coming from a temp JSON File containing :<br>
 * - the id's user
 * - the gender's user for diplaying the right illustration
 * - the firstname's user
 * - the lastname's user
 * and redirecting to the right user profil's page
 */
function Home() {

    const { data, isLoading, error } = useFetch(URL_JSON_HOME)

    const users = data?.users 

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  

    return (

        <div className="homeWrapper">
            <div className="homeContainer">
                <h1>Sélectionnez un profil</h1>
                { isLoading  ? (
                        <div>Chargement en cours...</div>
                ) : (    
                    <div className="cardWrapper">                
                        {users && users.map((user, index)=>                        
                            <div className="cardUser">
                                <div>
                                    <Link key={`${user.id}-${index}`} to={`/Profile/${user.id}`} className="linkUser">
                                        <img src={user.gender==="W" ? WomanIllustration : ManIllustration } alt="Profil avatar" />                                   
                                    </Link> 
                                    <h2>{user.firstName} {user.lastName}</h2>
                                </div>                                
                            </div>
                        )}
                    </div>                    
                )}
            </div>
        </div>
    )
}

export default Home