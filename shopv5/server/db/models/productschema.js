const mongoose = require("../connection");
const Product = mongoose.Schema;
const ProductSchema = new Product({
    'id':{type:Number,unique:true,required:true},
    'name':{type:String, default:'AAAAA'},
    'price':{type:Number},
    'quantity':{type:Number,default:0}
});
const ProductModel = mongoose.model('products',ProductSchema);
module.exports = ProductModel;
