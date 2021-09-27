/**
 * This function redefines axes and ordinates of the Activity's graphic (Bar Chart)<br>
 * Use it to convert a string date to a week number day
 * @param {string} x The date of the registered next values
 * @param {number} y1 The kilogram value
 * @param {number} y2 The calories value 
 * @returns An object with 3 pairs of key/valu : <br>
 * - "abs" : the number of the week day
 * - "ord1" : the kilogram's value
 * - "ord2" : the calorie's value
 */
export function graphActivityData(x,y1,y2) {

    const day = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(new Date(x))

    return({"abs":day, "ord1":y1, "ord2":y2})
}

/**
 * This function redefines axes and ordinates of the Average's graphic (Line Chart)<br>
 * Use it to convert number week day to a label week day
 * @param {number} x The week number day value
 * @param {number} y The session length value
 * @returns An object with 2 pairs of key/value : <br>
 * - "abs" : the label of the week day
 * - "ord" : the session length
 */
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

/**
 * This function redefines axes and ordinates of the Performance's graphic (Radar Chart)<br>
 * Use it to generate a global object for chart datas
 * @param {string} x The performance kind label
 * @param {number} y The performance kind value
 * @returns  An object with 2 pairs of key/value : <br>
 * - "angle" : the label's kind of performance
 * - "radar" : the value's kind of performance
 */
export function graphPerformanceData(x, y) {

    return({"angle": x, "radar":y})
}