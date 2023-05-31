const {Router} = require('express')
// const fire = require("../database/db")
const router = Router()
const User = require('../models/users').User
// const db = fire.firestore()

router.post('/', async (req, res) => {
    const {nama, email, password} = req.body
    
    try {
        const result = await User.create({
            nama:nama,
            email:email,
            password:password
        })
        
        res.status(200).json({result})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})



module.exports = router