const express = require('express');
const router = express.Router()
const {
    login, createUser, userAuth
     
    } = require('../contollers/user')
const auth = require('../middleware/auth')

router.post('/login', auth, login)

router.post('/loginauth', userAuth)
router.route('/create').post(createUser)
module.exports = router