# In config.py - Add production configuration
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    """Base configuration"""
    # Use environment variables for sensitive data
    SECRET_KEY = os.getenv('SECRET_KEY', 'generate-a-secure-key-for-production')
    
    # Base directory of the server
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    
    # Data file path
    DATA_FILE = os.path.join(BASE_DIR, 'data', 'website_data.json')
    
    # Upload configuration
    UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static', 'uploads')
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB max upload size
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    CORS_ORIGINS = ["http://localhost:5173","https://aws-user-group-yaounde.vercel.app"]

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    TESTING = False
    # Update with your actual domain
    CORS_ORIGINS = ["https://your-frontend-domain.com"] 
    
    # Security settings
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_SECURE = True
    REMEMBER_COOKIE_HTTPONLY = True

# Use environment variable to determine which config to use
config_env = os.getenv('FLASK_ENV', 'development')
if config_env == 'production':
    AppConfig = ProductionConfig
else:
    AppConfig = DevelopmentConfig