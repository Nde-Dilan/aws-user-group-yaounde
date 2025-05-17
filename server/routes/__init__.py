from .data_routes import data_bp
from .image_routes import image_bp

# Export the blueprints so they can be imported from the routes package
__all__ = ['data_bp', 'image_bp']