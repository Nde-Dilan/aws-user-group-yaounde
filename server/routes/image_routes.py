# server/routes/image_routes.py
import os
import time
from flask import Blueprint, request, jsonify, send_from_directory, current_app
from werkzeug.utils import secure_filename
from config import Config
from PIL import Image

image_bp = Blueprint('images', __name__)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_EXTENSIONS

@image_bp.route('/upload', methods=['POST'])
def upload_image():
    """Handle image uploads"""
    if 'image' not in request.files:
        return jsonify({"success": False, "message": "No image part"}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({"success": False, "message": "No selected file"}), 400
    
    if file and allowed_file(file.filename):
        # Get file info
        prefix = request.form.get('prefix', 'img')
        previous_image = request.form.get('previousImage', '')
        
        # Generate filename
        timestamp = int(time.time())
        extension = file.filename.rsplit('.', 1)[1].lower()
        filename = f"{prefix}-{timestamp}.{extension}"
        filepath = os.path.join(Config.UPLOAD_FOLDER, filename)
        
        # Save the file
        file.save(filepath)
        
        # Optimize image
        try:
            img = Image.open(filepath)
            img.save(filepath, optimize=True, quality=85)
        except Exception as e:
            current_app.logger.error(f"Image optimization failed: {str(e)}")
        
        # Delete previous image if specified
        if previous_image and not previous_image.startswith(('http://', 'https://')):
            previous_path = os.path.join(
                Config.UPLOAD_FOLDER, 
                os.path.basename(previous_image)
            )
            if os.path.exists(previous_path):
                try:
                    os.remove(previous_path)
                except Exception as e:
                    current_app.logger.error(f"Failed to delete previous image: {str(e)}")
        
        # Return the path relative to static folder
        image_url = f"/static/uploads/{filename}"  # Without /api prefix
        return jsonify({
            "success": True,
            "imageUrl": image_url,  # This will be /static/uploads/filename.jpg
            "message": "Image uploaded successfully"
        })
    
    return jsonify({"success": False, "message": "File type not allowed"}), 400

@image_bp.route('/<path:filename>')
def get_image(filename):
    """Serve uploaded images"""
    return send_from_directory(Config.UPLOAD_FOLDER, filename)