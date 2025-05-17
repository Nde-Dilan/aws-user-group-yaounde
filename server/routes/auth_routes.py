import os
import json
import time
import secrets
from flask import Blueprint, request, jsonify
from config import Config

auth_bp = Blueprint('auth', __name__)

# Store active tokens (in production, use a proper database)
active_tokens = {}

# Your 4-digit security code (in a real app, store this securely)
SECURITY_CODE = "1234"  # Change this to your desired 4-digit code

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    code = data.get('code')
    
    if not code:
        return jsonify({"success": False, "message": "No code provided"}), 400
    
    # Validate the code
    if code != SECURITY_CODE:
        # Add a small delay to prevent brute forcing
        time.sleep(1)
        return jsonify({"success": False, "message": "Invalid code"}), 401
    
    # Generate a token
    token = secrets.token_hex(16)
    
    # Store token with expiration (24 hours)
    active_tokens[token] = {
        "created": time.time(),
        "expires": time.time() + (24 * 60 * 60)  # 24 hours
    }
    
    return jsonify({
        "success": True,
        "message": "Authentication successful",
        "token": token
    })

@auth_bp.route('/verify', methods=['POST'])
def verify_token():
    data = request.json
    token = data.get('token')
    
    if not token or token not in active_tokens:
        return jsonify({"valid": False}), 401
    
    # Check if token is expired
    token_data = active_tokens[token]
    if token_data["expires"] < time.time():
        # Remove expired token
        active_tokens.pop(token)
        return jsonify({"valid": False, "message": "Token expired"}), 401
    
    return jsonify({"valid": True})

@auth_bp.route('/logout', methods=['POST'])
def logout():
    data = request.json
    token = data.get('token')
    
    if token and token in active_tokens:
        active_tokens.pop(token)
    
    return jsonify({"success": True})