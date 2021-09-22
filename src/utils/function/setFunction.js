
export function setData(data, isLoading) {
    
    let arrDatas = []

    isLoading  ? (
        <div>Chargement en cours...</div>
    ) : (   
        Object.values(data).forEach(() => {
            let keyData = data
            if (arrDatas.length === 0) {
                arrDatas.push({'Calories': keyData.calorieCount},
                              {'Protéines': keyData.proteinCount},
                              {'Glucides': keyData.carbohydrateCount},
                              {'Lipides': keyData.lipidCount})                                                
            }
        })
    )
    return (arrDatas)
}

export function setLabel(data1, data2) {

    let arrDatas=[]

    for (let i in data1) {             
        for (let perf in data2) {  
            if(parseInt(i) === parseInt(perf)+1) {
                arrDatas.push({"value": data2[perf].value,
                             "kind": parseInt(perf)+1,
                              "labelKind": data1[i]})
            }     
        }        
    }

    return (arrDatas)
}