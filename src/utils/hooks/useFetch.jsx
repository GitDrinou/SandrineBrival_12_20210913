import { useState, useEffect } from "react"

/**
 * <em>PERSONALIZED HOOK</em><br>
 * This function use the fetch method to get datas.
 * @param {string} url The JSON file url
 * @returns An object with different key/value : <br>
 * - isLoading ; to indicate if datas are load or not
 * - error : to indicate if there's an error on the fetch method
 * - data : display the selected informations for the left banner, or for the temporary home page
 */

export function useFetch(url) {   

    const [data, setData] = useState([])       
    const [isLoading, setLoading] = useState(true)    
    const [error, setError] = useState(false) 

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function getData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data?.data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [url])

    return { isLoading, error, data }
}