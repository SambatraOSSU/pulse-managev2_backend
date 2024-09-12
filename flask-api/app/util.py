import os
import face_recognition

def tokenize_data(text, tokenizer, pad_sequences, max_len):
    data_seq = tokenizer.texts_to_sequences([text])
    data_padded = pad_sequences(data_seq, maxlen=max_len) 
    return data_padded

def encode_data_train(folder_path):
    encodings = []
    file_names= []
    
    image_paths = [os.path.join(folder_path, filename) for filename in os.listdir(folder_path) 
                   if filename.endswith((".jpg", ".png"))]

    for image_path in image_paths:
        img = face_recognition.load_image_file(image_path)
        face_encodings = face_recognition.face_encodings(img)
        
        if len(face_encodings) > 0:
            img_encoding = face_encodings[0]
            encodings.append(img_encoding)
            file_names.append(os.path.basename(image_path))
        else:
            print(f"Aucun visage détecté dans {image_path}")

    return encodings, file_names