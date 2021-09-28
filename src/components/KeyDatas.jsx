import { useAPIFetch } from '../utils/hooks/useAPIFetch'
import { setData } from '../utils/function/setFunction'
import { Loader } from '../utils/style/Loader'
import CardKey from './common/CardKey'
import '../sass/KeyDatas.scss'

/**
 * MAIN KEY DATAS COMPONENT : This component function display all key datas on the profil's page
 * @param {(property|string)} idUser The user id of the user selected
 * @param {(property|string)} endPointKey The key label endpoint 
 * @returns A list of component (linked to CardKey component) with 2 props :<br>
 * - "type" : define the key's label
 * - "dataValue" : the key value as an object
 */
function KeyDatas({idUser,endPointKey}) {

    const { dataKey, isLoading, error } = useAPIFetch(idUser,endPointKey)
    
    if (error) {
        return <span class="errorText">Oups il y a eu un problème</span>
    }  
    
    const keyDatas = setData(dataKey, isLoading)

    return(
        <div className="keyContainer">
            <ul className="keysDataList">
                { isLoading  ? (
                    <Loader />
                ) : (
                    keyDatas && keyDatas.map((item, index)=> 
                    <CardKey 
                        key={`${Object.keys(item)}-${index}`}
                        type={Object.keys(item)}
                        dataValue= {Object.values(item)}
                    />
                ))}             
            </ul>            
        </div>
    )
}

export default KeyDatas