require('dotenv').config()
const {Router} = require('express')
const router = Router()
const User = require('../models/users').User
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const {email, password} = req.body
    // console.log(email, password)
    try {
        const user = await User.findOne({
            where:{
                email:email,
                password:password
            }
          })

          if(!user){
            return res.status(400).json({msg: "email atau password salah"})
        }
        // console.log(process.env.JWT_SECRET)
        
        const payload = {
            nama: user.nama,
            email: user.email
        }
         const jwtOption = {
            algorithm: "HS256",
		    expiresIn: '3h',
         }
        const token = jwt.sign(payload, process.env.JWT_SECRET, jwtOption)
        console.log(token)

        res.status(200).json({token: token})
    } catch (error) {
        res.status(400).json({msg: error})
    }

})



module.exports = router