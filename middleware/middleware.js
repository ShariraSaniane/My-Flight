require('dotenv').config()
const { response } = require('express')
const jwt = require('jsonwebtoken')

const authJwt = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401).json({
        msg: "Bearer token not found"
    })

    jwt.verify(token, process.env.JWT_SECRET, (err, response) => {
        if (err) return res.sendStatus(403).json({
            msg: "Invalid Token"
        })
        req.response = response
        next()
    })
    
}

const functionLain = () => {}
 
module.exports = {authJwt , functionLain}