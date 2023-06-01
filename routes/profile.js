const {Router} = require('express')
require('dotenv').config()
const router = Router()
const User = require('../models/users').User
const jwt = require('jsonwebtoken')
const { authJwt } = require('../middleware/middleware')
// const db = fire.firestore()

router.get('/', [authJwt], async (req, res) => {
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]

    // if (token == null) return res.sendStatus(401)
    // console.log(req.response)
   
    try {
        // const status = jwt.verify(token, process.env.JWT_SECRET)
        const result = await User.findAll()
        res.status(200).json({result})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

router.get('/:id', [authJwt], async (req, res) => {
    const {id} = req.params
    console.log(id)
    // res.send(id)

    try {
        const user = await User.findOne({
            id: id,
          })

          res.status(200).json({user})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

router.put('/:id', [authJwt], async (req, res) => {
    const {id} = req.params
    const {nama, email, password} = req.body
    console.log(nama)
    // res.send(id)
    try {
        const user = await User.findOne({
            id: id,
          })
        if(!user){
            return res.status(400).json({msg: "user tidak ditemukan"})
        }
        const newUser = {
            nama: (nama ? nama : user.nama),
            email: (email ? email : user.email),
            password: (password ? password : user.password),
        }

        await User.update(newUser, {
            id: id,
          });
        res.status(200).json({newUser})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})



module.exports = router