const express = require('express');
const userRouter = express.Router();
userRouter.post('/login',(req,res)=>{
    console.log('Body JSON is ',req.body);
    if(req.body.userid == req.body.password){
        res.status(200).json({'message':'Welcome '+req.body.userid});
    }
    else{
        res.status(200).json({'message':'Invalid Userid or Password'});
    }
    
})
userRouter.post('/register',(req,res)=>{

})
userRouter.post('/profile',(req,res)=>{

})
userRouter.post('/passwordchange',(req,res)=>{

})
module.exports = userRouter;