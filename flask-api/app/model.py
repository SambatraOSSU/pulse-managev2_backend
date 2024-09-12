from keras.models import load_model # type: ignore
from data import training_data
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.preprocessing.text import Tokenizer # type: ignore
import pandas as pd
import re

def load_chat_model():
    # Charger le modèle
    model = load_model("./app/static/chatbotModel.h5") 

    dataset = pd.DataFrame(training_data)

    for index, row in dataset.iterrows():
        question = row['question']
        question = re.sub(r'[^\w\s]', '', question)
        dataset.loc[index, 'question'] = question

    tokenizer = Tokenizer()
    tokenizer.fit_on_texts(dataset["question"])

    label_encoder = LabelEncoder()
    label_encoder.fit(dataset["response"])
    
    return model, tokenizer, label_encoder
