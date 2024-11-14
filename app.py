from flask import Flask
from flask import render_template
from flask import jsonify

app = Flask(__name__)

# Route to serve the main page
@app.route('/')
def index():
    return render_template('home.html')


@app.route('/power_plants')
def power_plants_loc():
    nuclear_plants_location_data = [
        {"name":"Kudankulam", "latitude":8.1233, "longitude":77.5391},
        {"name":"Kudankulam", "latitude":8.1233, "longitude":77.5391},
        {"name":"Mithi Virdi", "latitude":21.1536, "longitude":71.9250},
        {"name":"Chutka", "latitude":22.5976, "longitude":80.6423},
        {"name":"Jaitapur", "latitude":17.896, "longitude":73.6113},
        {"name":"Narora", "latitude":28.2456, "longitude":78.6869},
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


# API endpoint to provide location data (dummy data here)
@app.route('/location-data')
def location_data():
    data = {
        "Delhi": {"coordinates": [28.6139, 77.2090], "population": "31 million"},
        "Mumbai": {"coordinates": [19.0760, 72.8777], "population": "20 million"}
    }
    return jsonify(data)



if __name__ == '__main__':
    app.run(debug=True)
    
