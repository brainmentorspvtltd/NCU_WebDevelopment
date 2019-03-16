window.addEventListener("load",init);

function init(){
    showTotal();
    bindEvents();
}
function bindEvents(){
    document.querySelector('#add').addEventListener('click',addRecord);
}

function showTotal(){
    document.querySelector('#total').innerText = itemOperations.items.length;
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

function edit(){
    console.log("i am Edit ",this.getAttribute('data-itemid'));
}

function trash(){
    console.log("I am Trash ",this.getAttribute('data-itemid'))
}

function addRecord(){
    var item = new Item();
    for(let key in item){
        item[key] = document.querySelector('#'+key).value;
    }
    itemOperations.add(item);
    printRecord(item);
    console.log('Item Object is ',item);
    showTotal();
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
    var lastTD = tr.insertCell(index);
    lastTD.appendChild(createIcon('fas fa-trash mr-2',trash,item.id));
    lastTD.appendChild(createIcon('fas fa-edit',edit,item.id));
}