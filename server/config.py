# In config.py - Add production configuration
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    """Base configuration"""
    # Use environment variables for sensitive data
    SECRET_KEY = os.getenv('SECRET_KEY', '8GjSKhB30Vv7IkEHsk0nzG2Ul4/loVWNOwAGsqpBdG0QtqBEy6XE+K8G/xvQ5a8hfxhrhjP2RDNBWrNJ9b02gls1tkBz1X2Vdn8R5rD5yC1zKfqPdGmVrhumRy0pzuM0INtQeoPBodbxtkFNiNFmUC5VwCWLLU5m6MXsPPOSmJw=')
    
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
    CORS_ORIGINS = ["https://aws-user-group-yaounde.vercel.app"] 
    
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