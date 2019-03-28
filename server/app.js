const express = require('express');
const app = express();
const mycors = require('./cors');
const bodyParser = require('body-parser');
//const cors = require('cors');
//app.use(cors());
app.use(mycors);
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    
        res.send("Welcome User.... <a href='/aboutus'>About Us</a>");
})
app.get('/aboutus',(req,res)=>{
    res.send("About US");
})
app.post('/login',(req,res)=>{
    console.log('Body JSON is ',req.body);
    if(req.body.userid == req.body.password){
        res.json({'message':'Welcome '+req.body.userid});
    }
    else{
        res.json({'message':'Invalid Userid or Password'});
    }
    
})
app.listen(1234,()=>{
    console.log('Server Start');
})