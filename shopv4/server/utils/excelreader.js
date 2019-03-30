const xlsxj = require('xlsx-to-json');
function readExcel(filePath){
    
   
    
    xlsxj({
      input: filePath, 
      output: "output.json"
      
    }, function(err, result) {
      if(err) {
        console.error(err);
      }else {
        console.log(result);
      }
    });
}
module.exports = readExcel;
//readExcel('/Users/amit/Documents/NCU-FullStackBatch/shopserver/uploads/Sample_2019-03-30T07:17:05.522Z.xlsx')