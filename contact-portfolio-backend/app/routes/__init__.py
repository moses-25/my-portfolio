from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from .routes import contact
        db.create_all()

    return app
