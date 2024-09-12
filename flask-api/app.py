from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.sequence import pad_sequences# type: ignore
import sys
sys.path.insert(0, './app/')
from model import load_chat_model
from flask_cors import CORS # type: ignore
import tensorflow as tf
import numpy as np
import cv2 as cv
from controllers import recognizeController, chat_predict
from util import encode_data_train

print(tf.__version__)

app = Flask(__name__)
CORS(app)

model, tokenizer, label_encoder = load_chat_model()

@app.route("/")
def hello():
    return jsonify({'message': 'your server is running!!!'}), 200

@app.route("/chat", methods=["POST"])
def predict():
    donnees = request.form
    chat = donnees.get('chat')
    print("chat", chat)
    
    return chat_predict(model, tokenizer, label_encoder, chat, pad_sequences)

@app.route("/recognize", methods =["POST"])
def recognize():
    if 'image' not in request.files:
        return jsonify({'message': 'Aucun fichier téléchargé'}), 400
    
    image = request.files['image']
    image_array = np.frombuffer(image.read(), dtype=np.uint8)
    new_image = cv.imdecode(image_array, cv.IMREAD_COLOR)
    encodings, file_names = encode_data_train("../public/")
    
    return recognizeController(new_image,encodings, file_names)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)