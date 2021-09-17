import '../sass/KeyDatas.scss'
import { useFetch } from '../utils/hooks/useFetch'
import { getKeyData } from '../utils/functions'
import CardKey from './common/CardKey'

function KeyDatas() {

    const { data, isLoading, error } = useFetch('./datas/user.json')
    
    const keyDatas = getKeyData(data?.keyData, isLoading)

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }  

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