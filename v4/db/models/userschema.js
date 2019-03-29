const mongoose = require("../connection");
const User = mongoose.Schema;
const UserSchema = new User({
    'userid':{type:String,unique:true,required:true},
    'password':{type:String, default:'AAAAA'}
});
const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;
