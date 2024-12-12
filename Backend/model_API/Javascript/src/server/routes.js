const { Stream } = require('form-data');
const {postPredictHandler, getFirestoreData} = require('./handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        output: "stream",
        parse: true,       // Parse payload to extract the file
        /*Mengizinkan data berupa gambar*/
        multipart: true,
        maxBytes: 1000000,
        // allow: ['multipart/form-data'],
      }
    }
  },

  {
    path: '/predict/histories',
    method: 'GET',
    handler: getFirestoreData
  },
]
 
module.exports = routes;
