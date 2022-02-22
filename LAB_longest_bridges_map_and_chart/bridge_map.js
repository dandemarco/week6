//Your map should have an appropriate center location and zoom level, to show all five bridges.
let centerCoordinates = [40.0902, -97.7129]
let zoomLevel = 4   

let map = L.map("bridge-map").setView(centerCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Put all of this data into an array of objects...
bridges =  [
    {"name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": 1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690, -122.5517] }, 
]


//...and then loop over that array to create the markers and popups. Don't create separate markers in your code.
bridges.forEach(function(bridge) {
    let markerText = `<b>${bridge.name}</b><br><i>Span: ${bridge.span} meters</i>`
    L.marker(bridge.coordinates)
        .bindPopup(markerText)
        .addTo(map)
})

//Use the bridges dataset to draw a Chart.js bar chart of the bridge names and their span lengths.  
//You can draw the chart on the same page as the map, or you can make a new page.
let chartCanvas = document.querySelector('#longest-bridges-chart')
let ctx = chartCanvas.getContext('2d')

// TODO create chart object 
let bridgesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [ {
            label: 'Span (in meters)',
            data: [],
            backgroundColor: ['tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]
        } ]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            } ]
        }
    }
})

//Use the array you created in part 2 to avoid typing the data into your program again.  Don't manually write the data into Chart.js arrays. 
bridges.forEach(function(bridge) {
    bridgesChart.data.labels.push(bridge.name)
    bridgesChart.data.datasets[0].data.push(bridge.span)
    bridgesChart.update()
})
