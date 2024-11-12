const express = require('express')
require('dotenv').config()
const router = require('./Controllers/register')
const cors = require('cors')

const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())


 app.use('/api' , router )
 

 mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log('DataBase Connectes'))
 .catch((err) => console.log('Error on database'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
    console.log('SERVER RUNNING')
)