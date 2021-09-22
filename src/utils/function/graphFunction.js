
export function graphActivityData(x,y1,y2) {

    const day = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(new Date(x))

    return({"abs":day, "ord1":y1, "ord2":y2})
}

export function graphAverageData(x, y) {

    let dataX
    switch(x) {
        case 1: 
            dataX = 'L' 
            break
        case 2: 
        case 3:
            dataX = 'M' 
            break
        case 4: 
            dataX = 'J' 
            break
        case 5: 
            dataX = 'V' 
            break
        case 6: 
            dataX = 'S' 
            break
        case 7: 
            dataX = 'D' 
            break        
        default: break
    }

    return({"abs":dataX, "ord":y})
}

export function graphPerformanceData(x, y) {

    return({"angle": x, "radar":y})
}