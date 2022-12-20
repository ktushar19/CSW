const express = require('express')
const { response, request } = require('express')
const staffRouter = express.Router()
const staffModel = require('../models/staffModels')
const bcrypt = require('bcrypt')
const { Mongoose } = require('mongoose')

staffRouter.post('/Staff', async (request, response)=>{
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const staffmember = new staffModel({
        firstName:request.body.firstName,
        middleName:request.body.middleName,
        lastName:request.body.lastName,
        email:request.body.email,
        userName:request.body.userName,
        password: securePassword,
        //contact:[contacts],        
    })
    staffmember.save()
    .then(data =>{
        response.json(data)
    })      
    .catch(error =>{
        response.json(error)
    })
    
})

//Get All Details
staffRouter.get('/Staff', async (request, response) =>{    
    staffModel.find()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

//Find By ID
// staffRouter.get('/Staff/:id', async (request, response) =>{
//     if(request.params.id){
//         const id = request.params.id;
//         //console.log(id);
        
//         //staffModel.findById("60c4e19e89af182900ccd7bf")
//         //staffModel.findOne({ firstName: "Tushar" })
//         staffModel.findById(request.params.id)
//         .then(data =>{
//             if(!data){
//                 response.this.status(404).send({message:'Not found user with ${id}!'})
//             }else{
//                 response.json(data);
//             }            
//         })
//         .catch(error=>{
//             response.this.status(500).send({message:'Error retrieving user with id'+ id})
//         })
//     }
//     else{
//         //staffModel.find()
        
//         response.this.status(500).send({message:'Bad Request'})
//         //staffModel.findById()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })
//     }
   
// })

//Update
staffRouter.put('/Staff/:id', async (request, response) => {
    if(!request.body){
        return response
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const id = request.params.id;
    console.log(id);
    staffModel.findByIdAndUpdate(id, request.body,{useFindAndModify: false})
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

//Delete
staffRouter.delete('/Staff/:id', async (request, response) => {
    const id = request.params.id;
    console.log(id);
    staffModel.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            response.this.status(404).send({message:'Cannot delete user with ${id}. Maybe user id is wrong!'})
        }
        else{
            response.json({
                message:"User was deleted successfully!"
            })
        }
    })
    .catch(error=>{
        response.this.status(500).send({message:'Could not delete user with this id='+id})
    })
})
module.exports = staffRouter 