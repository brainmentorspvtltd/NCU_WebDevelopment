window.addEventListener("load",init);

const showHideSearchBar = ()=> document.querySelector('#searchbar').classList.toggle('hide');

function init(){
    showTotal();
    bindEvents();
    showHideSearchBar();
   
}
function updateRecord(){
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        itemObject[key] = document.querySelector('#'+key).value;
    }
    printTable(itemOperations.items);
}

const sortByPrice=()=>printTable(itemOperations.sortByPrice());


function bindEvents(){
    document.querySelector('#sort').addEventListener('click',sortByPrice);
    document.querySelector('#update').addEventListener('click',updateRecord);
    document.querySelector('#searchTxt').addEventListener('change',search);
    document.querySelector('#search').addEventListener('click',showHideSearchBar);
    document.querySelector('#remove').addEventListener('click',deleteRecords);
    document.querySelector('#add').addEventListener('click',addRecord);
}

function search(){
    var val = document.querySelector('#searchTxt').value;
    var key = document.querySelector('#searchby').value;
    var items = itemOperations.searchAll(key,val);
    printTable(items);
}

function deleteRecords(){
    var items = itemOperations.remove();
    printTable(items);
}

function showTotal(){
    document.querySelector('#total').innerText = itemOperations.items.length;
    document.querySelector('#mark').innerText = itemOperations.countTotalMark();
    document.querySelector('#unmark').innerText = itemOperations.items.length - itemOperations.countTotalMark();
}

function createIcon(className,fn, id){
    // <i class="fas fa-trash"></i>
    // <i class="fas fa-edit"></i>
    var iTag = document.createElement("i");
    iTag.className = className;
    iTag.addEventListener('click',fn);
    iTag.setAttribute("data-itemid", id) ;

    return iTag;
}

var itemObject;
function edit(){
    var id = this.getAttribute('data-itemid');
     itemObject = itemOperations.search(id);
     fillFields();
    console.log("i am Edit ",this.getAttribute('data-itemid'));
}

function fillFields(){
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        document.querySelector('#'+key).value = itemObject[key];
    }
}

function trash(){
    let id = this.getAttribute('data-itemid');
    itemOperations.markUnMark(id);
    showTotal();
    let tr = this.parentNode.parentNode;
    /*if(tr.className){
    tr.className = '';
    }
    else{
        tr.className = 'alert-danger';
    }*/
    tr.classList.toggle('alert-danger');
    console.log("I am Trash ",this.getAttribute('data-itemid'))
}

function addRecord(){
    var item = new Item();
    for(let key in item){
        if(key=='isMarked'){
            continue;
        }
        item[key] = document.querySelector('#'+key).value;
    }
    itemOperations.add(item);
    printRecord(item);
    console.log('Item Object is ',item);
    showTotal();
}
function printTable(items){
   var tbody =  document.querySelector('#items');
   tbody.innerHTML ='';
    items.forEach(item=>printRecord(item));
    showTotal();
}
function printRecord(item){
    var tbody = document.querySelector('#items');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in item){
        if(key=='isMarked'){
            continue;
        }
        let cell = tr.insertCell(index);
        cell.innerText = item[key] ;
        index++;
    }
    var lastTD = tr.insertCell(index);
    lastTD.appendChild(createIcon('fas fa-trash mr-2',trash,item.id));
    lastTD.appendChild(createIcon('fas fa-edit',edit,item.id));
}