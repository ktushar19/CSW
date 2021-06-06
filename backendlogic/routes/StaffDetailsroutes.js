const express = require('express')
const { response } = require('express')
const router = express.Router()
const staffTemplateCopy = require('../models/staffDetailsModels')
const bcrypt = require('bcrypt')

router.post('/Staff', async (request, response)=>{
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const staffmember = new staffTemplateCopy({
        firstName:request.body.firstName,
        middleName:request.body.middleName,
        lastName:request.body.lastName,
        email:request.body.email,
        userName:request.body.userName,
        password: securePassword,
    })
        
})

router.get('/StaffDetails', async (request, response) =>{    
    staffTemplateCopy.find()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})



module.exports = router 