import os
import json
import logging
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from werkzeug.middleware.proxy_fix import ProxyFix
from routes.data_routes import data_bp
from routes.image_routes import image_bp
from routes.auth_routes import auth_bp
from config import AppConfig
from security import SecurityHeaders


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("app.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Create Flask app
app = Flask(__name__, static_url_path='/static', static_folder='static')
app.config.from_object(AppConfig)
# Initialize security headers
SecurityHeaders(app)

# Fix for proper IP when behind proxy
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1)

# Rate limiting
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)

# Configure CORS
CORS(app, origins=AppConfig.CORS_ORIGINS, 
     supports_credentials=True)

# Apply rate limiting to auth endpoints
limiter.limit("5 per minute")(auth_bp)

# Register blueprints
app.register_blueprint(data_bp, url_prefix='/api/data')
app.register_blueprint(image_bp, url_prefix='/api/images')
app.register_blueprint(auth_bp, url_prefix='/api/auth')

# Create uploads directory if it doesn't exist
uploads_dir = os.path.join(app.static_folder, 'uploads')
os.makedirs(uploads_dir, exist_ok=True)

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def server_error(error):
    logger.error(f"Server error: {error}")
    return jsonify({"error": "Internal server error"}), 500

@app.route('/api/health')
def health_check():
    return jsonify({"status": "ok", "message": "API is running"})

# Only for local development
if __name__ == '__main__':
    # if AppConfig == DevelopmentConfig:
    if True:
        app.run(debug=True, port=5000)
    else:
        # Don't run with debug in production
        app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000)))