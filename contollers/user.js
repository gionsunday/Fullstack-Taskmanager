
const Tasker = require('../models/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

const createUser = async (req, res) => {
   
    const user = await Tasker.create({...req.body})
 
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({user:{name:user.name, userID:user._id}, token })

    
}
//END ACCOUNT ACTIVATION
//START USER LOG IN AUTHENTICATION
const userAuth = async (req, res) => {
    const {name, password} = req.body

    const user = await Tasker.findOne({name})
    if(!user){
        console.log('Not a REGISTERED user register now')
    }
   
       if(!password){
       console.log('Please provide email and password')
   }
   const isPasswordCorrect = await user.comparePassword(password)
    
   if(!isPasswordCorrect){
    console.log('Wrong password!')
}
    
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({token })
}
//END USER LOG IN AUTHENTICATION

//START LOGIN
const login = async (req, res) => {
    const {userID} = req.user
     const user =  await Tasker.findOne({_id:userID} )
      if(!user){
        throw new unAuthenticatedError('Not a REGISTERED user register now')
    }
 
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({iid:user._id})
}

module.exports ={createUser , userAuth, login}