const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv/config')
const cors = require('cors');
const userRoute = require('./routes/users.js')
// Express
var app = express()
app.use(bodyparser.json())
app.use(cors())

app.use('/users',userRoute)

app.get('/',(req,res)=>{
	res.send({message: 'Hi bro'})
})

// MongoDB connection
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true},()=>console.log("DB connected!"))

//listen

app.listen(3000,()=>{
	console.log('Server running!')
})