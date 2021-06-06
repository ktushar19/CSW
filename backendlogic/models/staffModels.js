const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//autoIncrement = require('mongoose-auto-increment');

const staffSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },    
    date:{
        type:Date,
        default:Date.now
    }, 
});


//autoIncrement.initialize(mongoose.connection);
//staffSchema.plugin(autoIncrement.plugin, 'Teacher');
const Teacher = mongoose.model('Teacher', staffSchema);

module.exports = Teacher;