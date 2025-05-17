# server/config.py
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    # Base directory of the server
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    
    # Data file path
    DATA_FILE = os.path.join(BASE_DIR, 'data', 'website_data.json')
    
    # Upload configuration
    UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static', 'uploads')
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB max upload size
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}