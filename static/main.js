// Initialize the map and set the view to India's coordinates
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India
const metropolitianColor = 3;
const radiusKM = 15; // this won't be much used btw...

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load the GeoJSON data for India's borders
fetch('static/india_border_administered.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "blue",          // Border color
                    weight: 0.8,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "lightblue", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for India's states
fetch('static/india_state_ut_administered.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "red",          // Border color
                    weight: 0.3,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "lightblue", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for CHENNAI
fetch('static/CHENNAI.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for BENGALURU
fetch('static/BENGALURU.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for MUMBAI
fetch('static/MUMBAI.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for DELHI
fetch('static/DELHI.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for HYDERABAD
fetch('static/HYDERABAD.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for JAIPUR
fetch('static/JAIPUR.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for INDORE
fetch('static/INDORE.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));


// Load the GeoJSON data for AHMADABAD
fetch('static/AHMADABAD.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for PUNE
fetch('static/PUNE.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Load the GeoJSON data for NAVI MUMBAI
fetch('static/NAVI MUMBAI.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: metropolitianColor,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.2        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Add Ladakh and Jammu&Kashmir gray zone
fetch('static/LADAKH_STATE.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: 0.8,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.7        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));

// Add Ladakh and Jammu&Kashmir gray zone
fetch('static/JAMMU & KASHMIR_STATE.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON layer with styling to highlight India's borders
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "gray",          // Border color
                    weight: 0.8,              // Border thickness
                    opacity: 0.8,           // Border opacity
                    fillColor: "gray", // Fill color
                    fillOpacity: 0.7        // Fill opacity
                };
            }
        }).addTo(map);
    })
    .catch(error => console.log("Error loading GeoJSON: ", error));


// doing for heritage sites now...
// List of coordinates for UNESCO World Heritage Sites in India
var heritageSites = [
    { name: "Taj Mahal", lat: 27.1751, lon: 78.0421 },
    { name: "Qutub Minar", lat: 28.5245, lon: 77.1855 },
    { name: "Red Fort", lat: 28.6562, lon: 77.2410 },
    { name: "Fatehpur Sikri", lat: 27.1750, lon: 77.6651 },
    { name: "Ellora Caves", lat: 20.0202, lon: 75.0189 },
    { name: "Ajanta Caves", lat: 20.5350, lon: 75.7069 },
    { name: "Sun Temple", lat: 20.7942, lon: 85.8252 },
    { name: "Khajuraho Group of Monuments", lat: 24.8500, lon: 79.9193 },
    { name: "Sanchi Stupa", lat: 23.6333, lon: 77.7167 },
    { name: "Buddhist Monuments at Sarnath", lat: 25.3815, lon: 83.0146 },
    { name: "Brihadeeswarar Temple", lat: 10.7905, lon: 79.1301 },
    { name: "Meghalaya Living Root Bridges", lat: 25.2955, lon: 91.5800 },
    { name: "Kaziranga National Park", lat: 26.6520, lon: 93.1604 },
    { name: "Keoladeo National Park", lat: 27.1532, lon: 77.5336 },
    { name: "Manas Wildlife Sanctuary", lat: 26.5702, lon: 91.1292 },
    { name: "Ranthambhore Fort", lat: 26.0045, lon: 76.5872 },
    { name: "Chilika Lake", lat: 19.7980, lon: 85.5373 },
    { name: "Kanha National Park", lat: 22.2833, lon: 80.4833 },
    { name: "Sundarbans", lat: 22.0167, lon: 88.7733 },
    { name: "Hampi", lat: 15.3350, lon: 76.4600 },
    { name: "Jantar Mantar", lat: 26.9213, lon: 75.8558 },
    { name: "Mahabalipuram", lat: 12.6260, lon: 80.1750 },
    { name: "Western Ghats", lat: 11.3850, lon: 77.5270 },
    { name: "Nilgiri Mountain Railway", lat: 11.4045, lon: 76.5267 },
    { name: "Bodh Gaya", lat: 24.6965, lon: 84.9917 },
    { name: "Rock Shelters of Bhimbetka", lat: 23.2575, lon: 77.5897 },
    { name: "The Hill Forts of Rajasthan", lat: 27.5931, lon: 75.7091 },
    { name: "Victoria Memorial", lat: 22.5431, lon: 88.3426 },
    { name: "Chhatrapati Shivaji Maharaj Terminus", lat: 18.9391, lon: 72.8350 },
    { name: "Red Fort Complex", lat: 28.6562, lon: 77.2410 },
    { name: "Ganga Ghats", lat: 25.3176, lon: 82.9739 },
    { name: "Churches and Convents of Goa", lat: 15.4967, lon: 73.8278 },
    { name: "Agra Fort", lat: 27.1767, lon: 78.0081 },
    { name: "Great Living Chola Temples", lat: 10.7816, lon: 79.1341 },
    { name: "Nanda Devi and Valley of Flowers National Parks", lat: 30.3953, lon: 79.9493 },
];



// Loop through the heritageSites and add a marker for each site
heritageSites.forEach(function(site) {
    var marker = L.circleMarker([site.lat, site.lon], {
        radius: 3,  // Radius of the dot
        fillColor: '#808080', // Gray color
        color: '#808080', // Border color (same as fill)
        weight: 0.6,  // Border width
        opacity: 1,  // Full opacity
        fillOpacity: 1  // Full opacity
    }).addTo(map);    
});


// Variable to keep track of the current circle and last marker
var currentCircle = null;
let lastMarker = null;

// Add a click event listener to the map
map.on('click', function(e) {
    // Remove the previous circle if it exists
    if (currentCircle) {
        map.removeLayer(currentCircle);
    }
    if (lastMarker){
        map.removeLayer(lastMarker);
    }

    // Add a new circle at the clicked location
    currentCircle = L.circle(e.latlng, {
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5,
        radius: 100000  // Radius in meters
    }).addTo(map);
    
    const lat = e.latlng.lat;
    const lon = e.latlng.lng;
    const radius = 10000; // rn working with this only... its meters

    $.getJSON(`/allAPI/${lat}&${lon}&${radius}`, function(data) {
        // Create a marker for the clicked location
        let resultColor = data.result_score === "Not Preferrable" ? "red" : "green";
        lastMarker = L.marker([lat, lon]).addTo(map);
        lastMarker.bindPopup(`
                <b>Num Of Water Bodies:</b> ${data.number_of_water_bodies}<br>
                <b>Num Of Parks/Forests:</b> ${data.number_of_forests}<br>
                <b>Num Of Highways:</b> ${data.number_of_highways}<br>
                <b>NPP Compatibility Score:</b> ${data.nuclear_score}/10<br>
                <b>Time to build the plant:</b> ${data.time_score} Yrs<br>
                <b>Result:</b> <span style="color: ${resultColor};">${data.result_score}</span><br>
            `).openPopup();
        
    }).fail(function() {
        alert("Error fetching data. Please try again later.");
    });
});
