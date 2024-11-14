from flask import Flask
from flask import render_template
from flask import jsonify

app = Flask(__name__)

# Route to serve the main page
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/nuclear_sites')
def nuclear_sites():
    data = {
        "Delhi": {"coordinates": [28.6139, 77.2090], "population": "31 million"},
        "Mumbai": {"coordinates": [19.0760, 72.8777], "population": "20 million"}
    }
    return render_template('nuclear_sites.html', data=data)

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
    
