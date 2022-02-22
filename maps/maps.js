let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9   //1 = whole world, 20 = city blocks

let map = L.map("college-map").setView(metroAreaCenterCoordinates, zoomLevel)     //"L" is a variable from the Leaflet js script linked in our html file

//Add tiles
//Paste code from https://gist.githubusercontent.com/claraj/ebd71b042a0b37c5da549f7ab1b38aee/raw/728cf951ba787607ee38a7489be14f84e41a7385/tile_layer_open_street_map.js
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

//Make a loop to create markers using the data in the "campuses" array
campuses.forEach(function(collegeCampus) {
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates)
        .bindPopup(markerText)
        .addTo(map)
})


// //Add markers
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')   //Add "popup" label to marker. Any html can go in hre
//     .addTo(map)                         //Add to map

// let stPaulCoordinates = [44.9483, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)

// //Add a circle to a location
// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//         color: 'green',
//         radius: 30000,       //radius is in meters
//         fillOpacity: 0.2,    //0 = solid color, 1 = completely transparent
//     })

//     .bindPopup('Twin Cities Metro Area')
//     .addTo(map)

// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale College<br><a href="http://www.normandale.edu">Website</a>')
//     .addTo(map)



