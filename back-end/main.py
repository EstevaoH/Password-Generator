from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)
def generate_password(length=12, include_special_characters=True):
    characters = string.ascii_letters + string.digits
    if include_special_characters:
        characters += string.punctuation
    password = ''.join(random.choice(characters) for i in range(length))
    return password

@app.route('/generate-password', methods=['POST'])
def get_password():
    data = request.get_json()
    password_length = data.get('length', 12)
    include_special_characters = data.get('special_characters', True)
    password = generate_password(password_length, include_special_characters)

    return jsonify({'password': password})

if __name__ == '__main__':
    app.run(debug=True)
