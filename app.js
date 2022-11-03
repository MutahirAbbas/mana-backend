const express = require('express');
const app = express();
const mongoose  = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv/config')
const postRoute = require('./routes/posts');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute);


mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("DB Connected Successfully")
    }
})



app.listen(process.env.PORT || 5000)