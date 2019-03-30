const mongoose = require("../connection");
const User = mongoose.Schema;
const UserSchema = new User({
    'userid':{type:String,unique:true,required:true},
    'password':{type:String, default:'AAAAA'},
    'role':{type:String},
    'status':{type:String,default:'D'}
});
const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;
