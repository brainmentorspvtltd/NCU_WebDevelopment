const UserModel  = require('../models/userschema');
const config = require("../../utils/config");
const userOperations = {
    addUser(userid , password){
        UserModel.create({'userid':userid,'pwd':password},(err)=>{
            if(err){
                  console.log('Err in DB Connection ',err);  
            }
            else{
                console.log('Record Added');
            }
        })
    },
    login(userid, password, response){
        UserModel.findOne({'userid':userid,'password':password},(err,doc)=>{
            if(err){
                response.status(200).json({"message":"Some DB Problem","status":config.ERROR}); 
                    console.log('Err in Read Admin User ',err);
            }
            else{
                if(doc){
                   response.status(200).json({"message":"Welcome","userid":userid,"role":doc.role,"status":config.SUCCESS}) ;
                    console.log('Login Success');
                    // redirect upload
                }
                else{
                    response.status(200).json({"message":"Invalid Userid or Password",status:config.FAIL});         
                }    
            }
        })
    },
    adminRegister(){
        if(config.firstTime.toUpperCase()==config.YES){
        
        UserModel.create({'userid':config.adminuser,'password':config.adminpwd,role:'Admin',status:'A'},(err)=>{
            if(err){
                  console.log('Err in DB Connection ',err);  
            }
            else{
                console.log('Admin  Added');
            }
        })
    }
    },
    readAdminUser(){
        UserModel.findOne({'userid':config.adminuser,'password':config.adminpwd},(err,doc)=>{
            if(err){
                    console.log('Err in Read Admin User ',err);
            }
            else{
                if(doc){
                    console.log('On File Upload');
                    // redirect upload
                }
                else{
                       this.adminRegister() ;    
                }    
            }
        })
    }
}
module.exports = userOperations;


//addUser('amit','abcd');