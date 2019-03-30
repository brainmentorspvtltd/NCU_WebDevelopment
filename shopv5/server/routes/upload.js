const express = require('express');
const uploadRouter = express.Router();
uploadRouter.get('/download',(req,res)=>{
    const path = require('path');
    let basePath = path.normalize(__dirname+"/..");
    let fullPath = path.join(basePath,"/xlstemplate/productstemplate.xlsx");
    console.log('I am in Download ',fullPath);
    res.download(fullPath);
})
uploadRouter.post('/upload',(req,res)=>{
    console.log("Inside Upload Post ");
    const xlsPath = req.file;
    //console.log("Message is ",req.message, " XLS Path ",xlsPath, " Req ",req);
    if(!xlsPath){
        console.log("inside if ",xlsPath);
        res.json({message:'Attach File is Not an XLS'});
    }
    else{
        console.log("inside else ",xlsPath, " ",__dirname );
        const path = require('path');
        const root = path.normalize(__dirname+'/..');
        const fullPath = path.join(root,xlsPath.path);
       
        console.log('Uploaded File Path is ',fullPath);
        //res.json({message:'File Uploaded...'});
        excelReader = require('../utils/excelreader');
        excelReader(fullPath,res);
    }
})
module.exports = uploadRouter;