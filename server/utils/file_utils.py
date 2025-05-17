# server/utils/file_utils.py
import os
import json
from config import Config

def ensure_directory_exists(directory):
    """Make sure a directory exists, create it if it doesn't"""
    if not os.path.exists(directory):
        os.makedirs(directory, exist_ok=True)

def write_js_module(data, filepath):
    """Write data as a JavaScript module"""
    js_content = f"// Auto-generated from API\nexport const DATA = {json.dumps(data, ensure_ascii=False, indent=2)};"
    
    ensure_directory_exists(os.path.dirname(filepath))
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    return True