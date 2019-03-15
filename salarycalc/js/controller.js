window.addEventListener("load",bindEvents);
function bindEvents(){
    console.log("Bind Event Call");
    document.getElementById('compute').addEventListener('click',takeSalary);
}

function takeSalary(){
    
    var basicSalary = document.getElementById('bs').value;
    console.log('Take Salary Called ',basicSalary );
    salaryOperations.inputSalary(parseInt(basicSalary));
    printSalarySlip();
    

    /*document.getElementById('hra').innerText = salaryOperations.hra();
    document.getElementById('da').innerText = salaryOperations.da();
    document.getElementById('ta').innerText = salaryOperations.ta();
    document.getElementById('pf').innerText = salaryOperations.pf();
    document.getElementById('gs').innerText = salaryOperations.gs();
   
    document.getElementById('tax').innerText = salaryOperations.tax();
    document.getElementById('ns').innerText = salaryOperations.ns();*/

}
function printSalarySlip(){
    for(let key in salaryOperations){
        if(key=='basicSalary' || key=='inputSalary'){
        continue;
        }
        document.getElementById(key).innerText = salaryOperations[key]();
        }
}
