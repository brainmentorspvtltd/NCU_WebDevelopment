const ProductModel  = require('../models/productschema');
const productOperations = {
    add(products,response){
        ProductModel.insertMany(products,(err)=>{
            if(err){
                console.log(':::::::Error is ',err); 
                  response.status(500).json({message:'File Not Uploaded...'})  
                       
                    }
            else{
                console.log('Uploaded...');  
                response.json({message:'File Uploaded...'}); 
                
            }
        })
    }
}
module.exports = productOperations;