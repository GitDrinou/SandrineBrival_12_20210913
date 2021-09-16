
export function getKeyData(data, isLoading) {

    let arrkeyDatas = []
    isLoading  ? (
        <div>Chargement en cours...</div>
    ) : (   
             
        Object.values(data).forEach(() => {
            let keyData = data
            if (arrkeyDatas.length === 0) {
                arrkeyDatas.push({'Calories': keyData.calorieCount},
                             {'Protéines': keyData.proteinCount},
                             {'Glucides': keyData.carbohydrateCount},
                             {'Lipides': keyData.lipidCount})
            }
            
        })
    )
    return (arrkeyDatas)
}




//const day = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(new Date(item.day))
       