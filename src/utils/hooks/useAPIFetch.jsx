import { useState, useEffect } from "react"
import { API_SERVER, ENDPOINT_ACTIVITY, ENDPOINT_AVERAGE, ENDPOINT_PERFORMANCE, ENDPOINT_USER } from '../constant/global_variables'


export function useAPIFetch(idUser,endPoint) {   

    const [dataUser, setDataUser] = useState([]) 
    const [dataActivity, setDataActivity] = useState([])
    const [dataAverage, setDataAverage] = useState([])  
    const [dataPerformance, setDataPerformance] = useState([])  
    const [dataGoal, setDataGoal] = useState([]) 
    const [dataKey, setDataKey] = useState([])
    const [isLoading, setLoading] = useState(true)    
    const [error, setError] = useState(false)
    const valEndPoint = endPoint !== 'null' ? `/${endPoint}` : ''

    useEffect(() => {        
        setLoading(true)
        async function getData() {
            try {
                const response = await fetch(`${API_SERVER}user/${idUser}${valEndPoint}`,{
                    "method": "GET" 
                })
                const data = await response.json()
                switch(endPoint) {
                    case ENDPOINT_ACTIVITY:
                        setDataActivity(data?.data['sessions'])                        
                        break
                    case ENDPOINT_AVERAGE:
                        setDataAverage(data?.data['sessions'])
                        break
                    case ENDPOINT_PERFORMANCE:
                        setDataPerformance(data?.data)
                        break
                    case ENDPOINT_USER:
                        (!data?.data['todayScore']) ? setDataGoal(data?.data['score']) : setDataGoal(data?.data['todayScore'])
                        setDataUser(data?.data['userInfos'])
                        setDataKey(data?.data['keyData'])
                        break                    
                    default: 
                        break
                }                
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [idUser,endPoint,valEndPoint])

    return { dataUser, isLoading, error, dataActivity, dataAverage, dataPerformance, dataGoal, dataKey }
}
