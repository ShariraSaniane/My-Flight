const {Router} = require('express')
// const fire = require("../database/db")
const router = Router()
const User = require('../models/users').User
// const db = fire.firestore()

router.post('/', async (req, res) => {
    const {nama, email, password} = req.body
    if(!(nama && email && password)) return res.status(400).json({msg: "field ada yang kosong"})
    // if(!nama && !email && !password) return res.status(400).json({msg: "field ada yang kosong"})
    
    try {
        const user = await User.findOne({
            where:{
                email:email
            }
          })
          if(user) return res.status(400).json({msg: "email sudah ada"})

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