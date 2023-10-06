
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        unique:true
    },   
    password:{ 
        type: String,
        trim:true,
        required: [true, 'please provide an name'],
    }
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})
UserSchema.methods.createJWT = function () {
    return jwt.sign({ userID: this._id, name: this.name,}, process.env.JWT_SECRETE, { expiresIn: process.env.JWT_LIFETIME })
}


UserSchema.methods.comparePassword = async function (candidatesPassword) {
    const isMatch = await bcrypt.compare(candidatesPassword, this.password)
    return isMatch
}
module.exports = mongoose.model('Tasker', UserSchema)