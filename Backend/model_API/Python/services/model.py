import os
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
import keras
import keras.backend as K

from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.models import Model, load_model
from keras import layers
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout, Flatten, Rescaling, BatchNormalization
from tensorflow.keras.preprocessing import image

def call_model():
    model = load_model("./services/model/model.keras")
    if model:
        print("Success")
        return model

def predict_image(model, file_path, class_names, target_size=(224, 224)):
    if file_path:
        img = tf.io.read_file(file_path)
        img = tf.image.decode_image(img, channels=3)
        img = tf.image.resize(img, target_size)
        #img = img / 255.0

        img = tf.expand_dims(img, axis=0)

        predictions = model.predict(img)
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        predicted_class_label = class_names[predicted_class_index]

        # plt.figure(figsize=(8, 6))
        # plt.imshow(tf.squeeze(img)/255.0)
        # plt.axis('off')
        # plt.title(f"Predicted Class: {predicted_class_label}")
        # plt.show()

        # print(f"Predicted Class: {predicted_class_label}")
        # print("\nClass Probabilities:")

        # output = []
        # for prob in zip(predictions[0]):
        #     output.append(prob)

        return predicted_class_label
        
    else:
        return ("Prediction failed: No file path provided.")