import '../sass/KeyDatas.scss'
import { useAPIFetch } from '../utils/hooks/useFetch'
import { setData } from '../utils/function/setFunction'
import CardKey from './common/CardKey'

function KeyDatas({idUser,endPointKey}) {

    const { dataKey, isLoading } = useAPIFetch(idUser,endPointKey)
    
    const keyDatas = setData(dataKey, isLoading)

    return(
        <div className="keyContainer">
            <ul className="keysDataList">
                { isLoading  ? (
                    <div>Chargement en cours...</div>
                ) : (
                    keyDatas && keyDatas.map((item, index)=> 
                    //console.log(Object.keys(item), Object.values(item))
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