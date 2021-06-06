const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }, 
});

module.exports = mongoose.model("Contact", contactSchema)