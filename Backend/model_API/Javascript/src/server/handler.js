const axios = require('axios');
const FormData = require('form-data');
const crypto = require('crypto');
const storeData = require("../services/storeData");
const getAllDocuments = require("../services/getData");
const { getImageLink } = require("../services/getImageLink");

async function postPredictHandler(request, h) {
  const { image } = request.payload;

  // console.dir(request.payload);
  file = request.payload.image;
  // console.log(file.hapi.filename);
  // console.log(file.hapi.headers);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const formData = new FormData();
  formData.append('image', image, "image.jpg");
  let output;

  try {
    const response = await axios.post('https://python-backend-623812248472.asia-southeast2.run.app/predict', formData, {
      headers: formData.getHeaders(),  // Automatically sets the correct Content-Type for multipart/form-data
    });

    // Handle the response from the Python backend
    const { label } = response.data;  // Assuming 'label' is in the response
    output = label;

  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      return h.response({ status: 'fail', message: 'Error making prediction' }).code(500);
  } 
  

  const link = await getImageLink(image, id);
  const data = {
    "id": id,
    "label": output,
    "link": link,
    "createdAt": createdAt
  }

  await storeData(id, data);
  const response = h.response({
    status: 'success',
    message: 'Model is predicted successfully',
    data
  })
  response.code(201);
  return response;
}

async function getFirestoreData(request, h) {
  const data = await getAllDocuments();
  const response = h.response({
    "status": "success",
    "data": data 
  })
  response.code(200);
  return response;
}

module.exports = {postPredictHandler, getFirestoreData};