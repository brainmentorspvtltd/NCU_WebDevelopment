const xlsxj = require('xlsx-to-json');
function readExcel(filePath,response){
    
   
    
    xlsxj({
      input: filePath, 
      output: "output.json"
      
    }, function(err, result) {
      if(err) {
        console.error(err);
      }else {
        const productOperations = require("../db/helpers/productoperations");
        productOperations.add(result, response);
        console.log(result);
      }
    });
}
module.exports = readExcel;
//readExcel('/Users/amit/Documents/NCU-FullStackBatch/shopserver/uploads/Sample_2019-03-30T07:17:05.522Z.xlsx')