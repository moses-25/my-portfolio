contact-portfolio-backend/
├── app/
│   ├── __init__.py         # App factory
│   ├── config.py           # Configuration settings
│   ├── models.py           # SQLAlchemy models
│   ├── routes/
│   │   ├── __init__.py
│   │   └── contact.py      # Contact form route handler
│   └── services/
│       └── email_service.py # Optional email service or DB logic
│
├── migrations/             # Flask-Migrate will generate this
│
├── .env                    # Environment variables (not committed)
├── .gitignore
├── requirements.txt
├── run.py                  # Entry point for running the app
└── README.md
