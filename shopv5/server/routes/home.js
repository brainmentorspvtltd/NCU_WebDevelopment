const express = require('express');
const homeRouter = express.Router();
homeRouter.get('/',(req,res)=>{
    res.send('Welcome User');
    //res.send("Welcome User.... <a href='/aboutus'>About Us</a>");
})

// homeRouter.post('/login',(req,res)=>{
//     res.send('Welcome User');
//     //res.send("Welcome User.... <a href='/aboutus'>About Us</a>");
// })
module.exports = homeRouter;