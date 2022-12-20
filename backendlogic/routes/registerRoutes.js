const express = require('express')
const { response, request } = require('express')
const registerRouter = express.Router()
const registerModel = require('../models/registerModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Mongoose } = require('mongoose')

registerRouter.post('/Register', async (request, response)=>{
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const memberregister = new registerModel({        
        firstName:request.body.firstName,
        instituteName:request.body.instituteName,
        email:request.body.email,
        password: securePassword     
    })
    memberregister.save()
    .then(data =>{
        response.json(data)
    })      
    .catch(error =>{
        response.json(error)
    })
})

registerRouter.get('/Register', async (request, response) =>{    
    registerModel.find()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

registerRouter.post('/', async (request, response) => {
    if(!request.body){
        return response
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const {email, password} = request.body;
    //console.log(password);
    //const user = await registerModel.findOne({$or: [{ email }]}) 
    const useremail = await registerModel.findOne({ email: email })   
    .then( user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                console.log(user.password);
                if(err){
                    response.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '3'})
                    response.json({
                        message: 'Login Successful!',
                        token,
                        email
                    })
                }
                else{
                    response.json({
                        message: 'Password does not matched!'
                    })
                }
            })
        }
        else{
            response.json({
                message: 'User not found!'
            })
        }
    })

   
})

//Update
registerRouter.put('/ResetPassword/:id', async (request, response) => {
    if(!request.body){
        return response
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const id = request.params.id;
    console.log(id);
    registerModel.findByIdAndUpdate(id, request.body,{useFindAndModify: false})
    .then(data =>{
        if(!data){
            response.this.status(404).send({message:'Cannot find user with ${id}. Maybe user not found!'})
        }
        else{
            response.json(data)
        }
    })
    .catch(error=>{
        response.this.status(500).send({message:'Error update user information!'})
    })
   
})


module.exports = registerRouter 