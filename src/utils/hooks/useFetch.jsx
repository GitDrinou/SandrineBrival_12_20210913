import { useState, useEffect } from "react"

/**
 * useFetch hook
 * @param { string } url 
 * @returns data from json file
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
                const response = await fetch(
                    url,
                    { headers : 
                        {
                            'Content-type': 'application/json',
                            'Accept' : 'application/json'
                        }
                    })
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [url])

    return { isLoading, data, error }
}



        //     await fetch(url,
        //         { headers : 
        //             {
        //                 'Content-type': 'application/json',
        //                 'Accept' : 'application/json'
        //             }
        //         })
        //         .then(function(response) {
        //             if (response.ok) {
        //                 response.json().then( function(myJson) {
        //                     //console.log(myJson)
        //                     setData(myJson)
        //                 })
        //             } else {
        //                 //console.log(response.status)
        //                 const errorMsg = `${response.status} : ${response.statusText}`
        //                 return <div className='error'>{errorMsg}</div>
        //             }
        //         })
        // }
        // const getData = async () => {
            
        // }