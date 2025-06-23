from flask import request, jsonify
from app.models import Message
from app import db
from flask import current_app as app

@app.route("/api/messages", methods=["POST"])
def save_message():
    data = request.get_json()

    try:
        new_msg = Message(
            name=data['name'],
            email=data['email'],
            subject=data['subject'],
            message=data['message']
        )
        db.session.add(new_msg)
        db.session.commit()
        return jsonify({"success": True, "message": "Message received."}), 201

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
