import sys
import os
sys.path.append('./services')

# import sys


# # Add the parent folder to sys.path


from model import call_model, predict_image
from flask import Flask, request, jsonify


app = Flask(__name__)
model = call_model()


@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']  # 'file' is the field name in the form-data request

    
    file_path = "uploaded_image.jpg"  # Save the image temporarily
    file.save(file_path)

    class_names = ["Bellpepper_Fresh", "Bellpepper_Rotten", "Carrot_Fresh", "Carrot_Rotten", "Cucumber_Fresh", "Cucumber_Rotten", "Potato_Fresh", "Potato_Rotten", "Tomato_Fresh", "Tomato_Rotten"]
    
    # print(predict_image(model, file_path, class_names))
    return jsonify({"label" : predict_image(model, file_path, class_names)}) 

if __name__ == '__main__':
    app.run(port=5000)

