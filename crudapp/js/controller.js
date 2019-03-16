window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector('#add').addEventListener('click',addRecord);
}

function addRecord(){
    var item = new Item();
    for(let key in item){
        item[key] = document.querySelector('#'+key).value;
    }
    itemOperations.add(item);
    printRecord(item);
    console.log('Item Object is ',item);
}
function printRecord(item){
    var tbody = document.querySelector('#items');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in item){
        let cell = tr.insertCell(index);
        cell.innerText = item[key] ;
        index++;
    }
}