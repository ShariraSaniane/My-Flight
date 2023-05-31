const express = require('express')
const register = require('./routes/register')
const login = require('./routes/login')
const profile = require('./routes/profile')
const flight = require('./routes/flight')
const airport = require('./routes/airport')
const serviceAccount = require('./serviceaccount.json')
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const sequelize = require("firestore-sequelize")
sequelize.initializeApp(admin)

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/profile', profile)
app.use('/api/flight', flight)
app.use('/api/airport', airport)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/tes', (req, res) => {
    res.send('Hai World!')
})

app.listen(port, () => console.log(`Hello World on port ${port}`))