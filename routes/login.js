const {Router} = require('express')
const router = Router()
const User = require('../models/users').User

router.post('/', async (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
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
        
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({msg: error})
    }

})



module.exports = router