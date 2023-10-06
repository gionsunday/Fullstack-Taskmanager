
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        console.log('Authentication Error! Not Authorized')
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = await jwt.verify(token,  process.env.JWT_SECRETE)
        console.log(payload)
        req.user =  {userID:payload.userID, name:payload.name}
        next()
    } catch (error) {
        console.log('Authentication Error! Absolute error!')
    
    }
}

module.exports = auth