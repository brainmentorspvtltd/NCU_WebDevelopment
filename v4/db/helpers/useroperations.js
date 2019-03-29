const UserModel  = require('../models/userschema');
function addUser(userid , password){
    UserModel.create({'userid':userid,'pwd':password},(err)=>{
        if(err){
              console.log('Err in DB Connection ',err);  
        }
        else{
            console.log('Record Added');
        }
    })
}
addUser('amit','abcd');