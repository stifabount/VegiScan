const admin = require("firebase-admin");

// Load service account key
const serviceAccount = require("../../firebaseAdmin.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
// Get Firestore instance
const db = admin.firestore();

async function getAllDocuments() {
    const collectionRef = db.collection("predictions");
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }

    const data = [];
    snapshot.forEach((doc) => {
        data.push({
            "id": doc.id,
            "history": {

                "id": doc.id,
                "label": doc.data().label,
                "createdAt": doc.data().createdAt,
                "link": doc.data().link,
                
            }
        });
        // console.log(`${doc.id} =>`, doc.data());
    });
    
    return data;
}

module.exports = getAllDocuments;
