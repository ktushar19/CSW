const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//autoIncrement = require('mongoose-auto-increment');

const userSchema = new Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true,
        unique:true
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
//staffSchema.plugin(autoIncrement.plugin, 'User');
const User = mongoose.model('User', userSchema);

module.exports = User;