from flask import jsonify
import face_recognition
from util import tokenize_data

def recognizeController(image, encodings, file_names):
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)
    
    if (len(face_encodings)) > 0:
        matches = face_recognition.compare_faces(encodings, face_encodings[0])
        
        if True in matches:
            match_index = matches.index(True)
            recognizedFile= file_names[match_index]
            print("Individu reconnu avec succés")
            return jsonify({'message':'Individu reconnu avec succés', 'file': recognizedFile}), 200
        else:
            print("Individu non reconnu")
            return jsonify({'message':'Individu non reconnu'}), 400
    else:
        print("Aucun visage détecté dans l'image")
        return jsonify({'message': 'Aucun visage détecté dans l\'image'}), 500
    
def chat_predict(model, tokenizer, label_encoder , text, pad_sequences):
    data = tokenize_data(text, tokenizer, pad_sequences, 18)
    prediction = model.predict(data)
    predicted_class = label_encoder.inverse_transform(prediction.argmax(axis=-1))
    
    for input_text, predicted_class in zip(data, predicted_class):
        print("Input:", input_text)
        print("Prediction:", predicted_class)   
        
    return jsonify({'message': predicted_class}), 200