from flask import request

class SecurityHeaders:
    def __init__(self, app):
        self.app = app
        app.after_request(self.set_secure_headers)
    
    def set_secure_headers(self, response):
        response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-Frame-Options'] = 'SAMEORIGIN'
        response.headers['X-XSS-Protection'] = '1; mode=block'
        response.headers['Content-Security-Policy'] = "default-src 'self'"
        return response

