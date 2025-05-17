import os
import json  # Add this import!
from flask import Blueprint, request, jsonify
from config import Config

data_bp = Blueprint('data', __name__)

def get_website_data():
    """Load website data from file or create default if not exists"""
    try:
        # Check if the data file exists
        if not os.path.exists(Config.DATA_FILE):
            # Create directory if needed
            os.makedirs(os.path.dirname(Config.DATA_FILE), exist_ok=True)
            
            # Create empty data structure
            empty_data = {}
            
            # Save empty data to file
            with open(Config.DATA_FILE, 'w', encoding='utf-8') as f:
                json.dump(empty_data, f)
            
            return empty_data
        
        # File exists, try to read it
        with open(Config.DATA_FILE, 'r', encoding='utf-8') as f:
            # Check if file is empty
            print("Check if file is empty")
            content = f.read().strip()
            if not content:
                return {}
            f.seek(0)  # Reset file pointer to beginning
            return json.load(f)
            
    except Exception as e:
        print(f"Error reading website data: {e}")
        return {}

def save_website_data(data):
    """Save website data to file"""
    try:
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(Config.DATA_FILE), exist_ok=True)
        
        # Save data to file
        with open(Config.DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error saving website data: {e}")
        return False

@data_bp.route('/', methods=['GET'])
def get_data():
    """Get all website data"""
    return jsonify(get_website_data())

@data_bp.route('/', methods=['POST'])
def update_data():
    """Update all website data"""
    try:
        data = request.json
        if not data:
            return jsonify({"success": False, "message": "No data provided"}), 400
        
        if save_website_data(data):
            return jsonify({"success": True, "message": "Data updated successfully"})
        else:
            return jsonify({"success": False, "message": "Failed to save data"}), 500
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@data_bp.route('/<section>', methods=['GET'])
def get_section(section):
    """Get a specific section of website data"""
    data = get_website_data()
    if section in data:
        return jsonify(data[section])
    return jsonify({"error": "Section not found"}), 404

@data_bp.route('/<section>', methods=['PUT'])
def update_section(section):
    """Update a specific section of website data"""
    try:
        section_data = request.json
        data = get_website_data()
        data[section] = section_data
        
        if save_website_data(data):
            return jsonify({"success": True, "message": f"Section '{section}' updated successfully"})
        else:
            return jsonify({"success": False, "message": "Failed to save data"}), 500
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@data_bp.route('/export', methods=['GET'])
def export_data():
    """Export data as JavaScript file"""
    data = get_website_data()
    js_content = f"// Auto-generated from API\nexport const DATA = {json.dumps(data, ensure_ascii=False, indent=2)};"
    
    return js_content, 200, {
        'Content-Type': 'application/javascript',
        'Content-Disposition': 'attachment; filename=index.js'
    }