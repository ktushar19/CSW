const express = require('express')
const { response, request } = require('express')
const userRouter = express.Router()
const userModel = require('../models/userModels')
const bcrypt = require('bcrypt')
const { Mongoose } = require('mongoose')





//Get All Details
userRouter.get('/User', async (request, response) =>{    
    userModel.find()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})




module.exports = userRouter 