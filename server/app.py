# server/app.py
import os
from flask import Flask, jsonify
from flask_cors import CORS
from routes.data_routes import data_bp
from routes.image_routes import image_bp

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Register blueprints
app.register_blueprint(data_bp, url_prefix='/api/data')
app.register_blueprint(image_bp, url_prefix='/api/images')

# Create uploads directory if it doesn't exist
uploads_dir = os.path.join(app.static_folder, 'uploads')
os.makedirs(uploads_dir, exist_ok=True)

@app.route('/api/health')
def health_check():
    return jsonify({"status": "ok", "message": "API is running"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)