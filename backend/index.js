const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const indexRouter = require('./route/urlRoutes')

const PORT = 5000;

dotEnv.config();

app.get('/abya',(req,res)=>{
    res.send('hello abya')
})

app.use(cors());
app.use(express.json());
app.use('/',indexRouter)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connect successfully!"))
.catch((error)=>console.log(error))


app.listen(PORT, () =>{console.log(`Server running on ${PORT}`)})