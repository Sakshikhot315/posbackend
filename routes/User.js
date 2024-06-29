const express = require('express')

const router = express.Router()

const userModel = require('../models/User')

const {Register,Login,getUsers} = require('../controllers/User')

router.post('/register',Register)
router.post('/login',Login)
router.get('/getusers',getUsers)

module.exports=router