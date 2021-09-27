/**
 * This function redefines key datas
 * @param {object} data List of key/value of key datas user
 * @param {boolean} isLoading  It indicate if the data is loading or not
 * @returns An array with 4 pairs of key/value : (Key's label):(Key's value)
 */
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

/**
 * This function links a performance kind number with is label equivalent
 * @param {object} data1 This details the kind's label performance
 * @param {object} data2 This details the kind's value performance
 * @returns An array with pairs of key/value : (kind's label):(kind's value)
 */
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