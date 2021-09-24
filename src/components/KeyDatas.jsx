import { useAPIFetch } from '../utils/hooks/useAPIFetch'
import { setData } from '../utils/function/setFunction'
import CardKey from './common/CardKey'
import '../sass/KeyDatas.scss'

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
                    <div>Chargement en cours...</div>
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