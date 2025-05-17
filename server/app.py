import os
import json
from flask import Flask, jsonify, request,send_from_directory
from flask_cors import CORS
from routes.data_routes import data_bp
from routes.image_routes import image_bp
from routes.auth_routes import auth_bp
from config import Config

app = Flask(__name__,static_url_path='/static', static_folder='static')

# Configure CORS more explicitly
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173","methods": ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True}})

# Register blueprints
app.register_blueprint(data_bp, url_prefix='/api/data')
app.register_blueprint(image_bp, url_prefix='/api/images')


# Register the blueprint
app.register_blueprint(auth_bp, url_prefix='/api/auth')

 
# Create uploads directory if it doesn't exist
uploads_dir = os.path.join(app.static_folder, 'uploads')
os.makedirs(uploads_dir, exist_ok=True)

# Add a direct route to serve static files
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

 
 
@app.route('/api/health')
def health_check():
    return jsonify({"status": "ok", "message": "API is running"})

# Add a test route for debugging
@app.route('/api/test-cors', methods=['GET', 'POST', 'OPTIONS'])
def test_cors():
    if request.method == 'OPTIONS':
        # Preflight request - return empty response with CORS headers
        response = app.make_default_options_response()
    else:
        response = jsonify({
            "message": "CORS test successful",
            "method": request.method,
            "headers": dict(request.headers)
        })
    
    # Add CORS headers manually for this route
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    
    return response

if __name__ == '__main__':
    
    
    # Print server info
    print(f"Starting Flask server at http://localhost:5000")
    print(f"CORS should be enabled for all /api/* routes")
    print(f"Test CORS at http://localhost:5000/api/test-cors")
    
    # Start the server with host='0.0.0.0' to make it accessible from other devices
    app.run(debug=True, port=5000, host='0.0.0.0')