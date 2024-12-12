const { Storage } = require('@google-cloud/storage');
const bucketName = 'louis-capstone-deployedmodel'; // Replace with your bucket name

const storage = new Storage();
const bucket = storage.bucket(bucketName);

async function getImageLink(file, id) {
  try {

    const ext = file.hapi.filename.split(".").pop();
    console.log(`${id}.${ext}`);
    const fileRef = bucket.file(`Images/${id}.${ext}`);

    await fileRef.save(file._data, {
      contentType: file.hapi.headers['content-type'],
      public: true
    });

    const fileUrl = `https://storage.googleapis.com/${bucket.name}/Images/${id}.${ext}`;
    return fileUrl;
  } catch (error) {
    throw new Error('Error uploading file to Cloud Storage: ' + error.message);
  }
}

module.exports = { getImageLink };
