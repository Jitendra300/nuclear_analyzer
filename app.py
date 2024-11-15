from flask import Flask
from flask import render_template
from flask import jsonify
import requests
from geopy.distance import geodesic

app = Flask(__name__)

# Route to serve the main page
@app.route('/')
def index():
    return render_template('home.html')


@app.route('/power_plants')
def power_plants_loc():
    nuclear_plants_location_data = [
        {"name":"Kudankulam Nuclear Power Station", "latitude":8.1233, "longitude":77.5391},
        {"name":"Kaiga Generating Station", "latitude":21.1536, "longitude":71.9250},
        {"name":"Jaitapur", "latitude":17.896, "longitude":73.6113},
        {"name":"Narora Atomic Power Station", "latitude":28.2456, "longitude":78.6869},
        {"name":"Kaiga", "latitude":14.8585, "longitude":74.5220},
        {"name":"Kalpakkam", "latitude":12.5683, "longitude":80.1512},
        {"name":"Kakrapar Atomic Power Station", "latitude":21.7765, "longitude":73.3171},
        {"name":"Rajasthan Atomic Power Station", "latitude":25.3364, "longitude":75.6696},
        {"name":"Tarapur Atomic Power Station", "latitude":19.8842, "longitude":72.9146}
    ]
    return jsonify(nuclear_plants_location_data)


@app.route('/nuclear_sites')
def nuclear_sites():
    return render_template('nuclear_sites.html')


def water_bodies_api(lat, lon, radius):
    lat = round(lat, 4)
    lon = round(lon, 4)
    
    query = f"""
    [out:json];
    (
      node(around:{radius},{lat},{lon})["natural"="water"];
      way(around:{radius},{lat},{lon})["natural"="water"];
      node(around:{radius},{lat},{lon})["waterway"];
      way(around:{radius},{lat},{lon})["waterway"];
    );
    out center;
    """

    # Make a request to the Overpass API
    url = "http://overpass-api.de/api/interpreter"
    response = requests.get(url, params={'data': query})
    data = response.json()

    # Process each feature in the response
    results = []
    river_name = set()

    for element in data.get("elements", []):
        if element["type"] == "node":
            # For nodes, use the node's latitude and longitude directly
            water_coordinates = (element["lat"], element["lon"])
        elif element["type"] == "way" and "center" in element:
            # For ways, use the center coordinates
            water_coordinates = (element["center"]["lat"], element["center"]["lon"])
        else:
            # Skip elements without location data
            continue
        
        # Calculate the distance from the input coordinates to the water body's coordinates
        distance = geodesic((lat, lon), water_coordinates).meters
        # Optional: get the name of the water body if available
        name = element.get("tags", {}).get("name")
        if(name and name not in river_name and distance < 25000):
            river_name.add(name)
            results.append((name, water_coordinates, distance))

    return results

def highways_api(lat,lon, radius):
    lat = round(lat, 4)
    lon = round(lon, 4)
    # Overpass API URL
    overpass_url = "http://overpass-api.de/api/interpreter"
    # Overpass QL query to find highways within the radius
    overpass_query = f"""
    [out:json];
    (
      way["highway"="motorway"](around:{radius},{lat},{lon});
      way["highway"="primary"](around:{radius},{lat},{lon});
    );
    out count;
    """
    # Send the request to the Overpass API
    try:
        response = requests.get(overpass_url, params={'data': overpass_query})
        # Check for a valid response
        if response.status_code != 200:
            return None
        # Try to decode the JSON response
        data = response.json()
        # Extract the number of highway elements
        if 'elements' in data:
            # Return the count of highways found
            return data['elements'][0]['tags']['ways']
        # If no highways are found
        return 0
    except requests.exceptions.RequestException as e:
        # Handle any request-related errors
        return None
    

def forest_environment_api(lat, lon, radius):
    lat = round(lat, 4)
    lon = round(lon, 4)

    # Overpass API URL
    overpass_url = "http://overpass-api.de/api/interpreter"
    
    # Overpass QL query to find natural areas like forests, parks, and protected areas within the radius
    overpass_query = f"""
    [out:json];
    (
      way["landuse"="forest"](around:{radius},{lat},{lon});
      way["natural"="wood"](around:{radius},{lat},{lon});
      way["boundary"="national_park"](around:{radius},{lat},{lon});
      way["boundary"="protected_area"](around:{radius},{lat},{lon});
      way["leisure"="park"](around:{radius},{lat},{lon});
    );
    out count;
    """
    
    # Send the request to the Overpass API
    try:
        response = requests.get(overpass_url, params={'data': overpass_query})
        
        # Check for a valid response
        if response.status_code != 200:
            return None
        
        # Try to decode the JSON response
        data = response.json()
        
        # Extract the number of elements
        if 'elements' in data:
            return (data['elements'][0]['tags']['ways'])            
        
        # If no elements found
        return 0
    
    except requests.exceptions.RequestException as e:
        # Handle any request-related errors
        return None


@app.route('/allAPI/<float:lat>&<float:lon>&<int:radius>')
def allAPI(lat, lon, radius):
    lat = round(lat, 4)
    lon = round(lon, 4)
    
    highways_api_value = int(highways_api(lat, lon, radius))
    water_bodies_api_value = int(len(water_bodies_api(lat, lon, radius)))
    forest_api_value = int(forest_environment_api(lat,lon,radius))

    nuclear_score = 0
    time_score = 0

    if(water_bodies_api_value == 0 or highways_api_value == 0):
        nuclear_score = 0
    elif(highways_api_value > 5 and water_bodies_api_value > 5 and forest_api_value == 0):
        nuclear_score = 10
    elif(forest_api_value <= 0 and (highways_api_value > 1 and water_bodies_api_value > 1)):
        nuclear_score = 8
    elif(forest_api_value >= 3):
        nuclear_score = 2
    else:
        nuclear_score = 5

    if(nuclear_score == 0):
        time_score = 0
    if(highways_api_value == 0 or water_bodies_api_value == 0):
        time_score = 18
    elif(highways_api_value >= 5 and water_bodies_api_value >= 2 and nuclear_score >= 8):
        time_score = 6
    elif(highways_api_value >= 2 and water_bodies_api_value >= 1 and nuclear_score >= 4):
        time_score = 9
    elif(highways_api_value >= 1 and water_bodies_api_value >= 1 and nuclear_score >= 3):
        time_score = 12
    else:
        time_score = 14

    return jsonify({
        'number_of_water_bodies': water_bodies_api_value,
        'number_of_forests': forest_api_value,
        'number_of_highways': highways_api_value,
        'nuclear_score': nuclear_score,
        'time_score':time_score
    })
    


if __name__ == '__main__':
    app.run(debug=False)
    
