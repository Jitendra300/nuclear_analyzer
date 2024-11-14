// Initialize the map and set the view to India's coordinates
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India
const metropolitianColor = 3;

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
                    weight: 0.6,              // Border thickness
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



// Variable to keep track of the current circle
var currentCircle = null;

// Add a click event listener to the map
map.on('click', function(e) {
    // Remove the previous circle if it exists
    if (currentCircle) {
        map.removeLayer(currentCircle);
    }

    // Add a new circle at the clicked location
    currentCircle = L.circle(e.latlng, {
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5,
        radius: 300000  // Radius in meters
    }).addTo(map);

    // Optional: Bind a popup to the circle showing coordinates
    currentCircle.bindPopup("You clicked at: " + e.latlng.toString()).openPopup();
});
