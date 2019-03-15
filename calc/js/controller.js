window.addEventListener("load",()=>{
    var nums = document.getElementsByClassName('num');
    for(let num of nums){
        num.addEventListener("click",()=>document.getElementById('output').value += this.innerText);
        // button(num).takeNumber()
    }
    document.getElementById('equal').addEventListener("click",()=>document.getElementById('output').value =  eval(document.getElementById('output').value));
});
// function result(){
//     document.getElementById('output').value =  eval(document.getElementById('output').value);
// }
// function takeNumber(){
//     document.getElementById('output').value += this.innerText;
// }
