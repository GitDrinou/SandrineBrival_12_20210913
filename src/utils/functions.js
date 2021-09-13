import * as d3 from "d3"

export function drawBarChart(data) {

    const boxHeight = 320
    const boxWidth = 835


    let days = []
    let weights = []
    let calories = []
    

    data.forEach(item => {
        const day = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(new Date(item.day))
        days.push(day)
        weights.push(item.kilogram)
        calories.push(item.calories)
    })
    
    const svgBox = d3.select('.box')
                     .append('svg')
                     .attr('width', boxWidth)
                     .attr('height', boxHeight)
                     .style('border', '1px solid black')
                     .attr('transform', `translate(30, 0)`)

    svgBox.selectAll('rect')
            .data(weights).enter()
            .append('rect')
            .attr('width', 10)
            .attr('height', (d) => d)
            .attr('fill', '#282D30')            
            .attr('transform', `translate(30, 0)`)
            .attr('x', (d, i) => i * 100)
            .attr('y', (d, i) => boxHeight - d)
}