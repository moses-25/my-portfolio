from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os

db = SQLAlchemy()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    
    CORS(app)
    db.init_app(app)

    with app.app_context():
        from . import routes
        db.create_all()
    
    return app
