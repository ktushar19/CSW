const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//for sceurity reason we are using dotenv 
//when we add connection link of mongodb its show password in link
const dotenv = require('dotenv')
dotenv.config()
//conection to mongoDB
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

//To pass a bodypasser to help incoming and outgoing request
app.use(express.json())
app.use(cors())

//1st argument base path and second url is routeurls

const staffroutes = require('./routes/staffroutes')
app.use('/app', staffroutes)

app.listen(4000, () => console.log("server is up and running"))