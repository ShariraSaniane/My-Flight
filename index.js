const express = require("express")
const app   = express()
let port = process.env.PORT || 3000;
const usercontroller = require("./controllers/users")
// Import config firebase
const firebase = require("./config");
// Create db to use firestore
const db = firebase.firestore()

app.use(express.json());

app.get('/users',async(req,res)=>{
    try {
    const data = await db.collection('users').get();
    const users = [];
    data.forEach((doc) => {
      users.push(doc.data());
    });

    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).send('Error retrieving users');
  }

})

app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})

app.post("/regist/users", usercontroller.regist)