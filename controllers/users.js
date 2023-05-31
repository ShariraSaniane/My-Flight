const firebase = require('../config');
const db = firebase.firestore();

const regist = async (req, res) => {
  try {
    const { email, nama, password } = req.body;
    const collectionRef = db.collection('users');
    const documentRef = collectionRef.doc('userr'); // Create a new document with an automatically generated ID

    const data = {
      email: email,
      nama: nama,
      password: password
    };

    await documentRef.set(data);
    console.log('Data inserted successfully!');
    res.status(200).send('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Error inserting data');
  }
};

module.exports = { regist };
