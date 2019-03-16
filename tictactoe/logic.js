window.addEventListener("load",bindEvents);
var buttons ;
var gameOver = false;
function bindEvents(){
     buttons = document.querySelectorAll('button');
    for(let button of buttons){
        button.addEventListener('click',isXOrZero);
    }
}
var xorzero = false;
function isXOrZero(){
    if(gameOver==false && this.innerText.trim().length==0){
    this.innerText = xorzero?'X':'0';
    isGameOver();
    xorzero = !xorzero;
    }
}
const isNotBlank = str=>str.innerText.trim().length>0?true:false;

function isRowNotBlank(one , two , three){
        return isNotBlank(one) && isNotBlank(two) && isNotBlank(three);
}
function isSame(one , two , three){
    if(isRowNotBlank(one, two, three)){
    return one.innerText == two.innerText && one.innerText == three.innerText;
    }
    else{
        return false;
    }
}
function winner(){
   return  xorzero?'X':'0';
}
function isGameOver(){
    if(isSame(buttons[0],buttons[1],buttons[2])){
        document.querySelector('#result').innerText = 'Game Over' + winner();
        gameOver = true;
    }
    if(isSame(buttons[3],buttons[4],buttons[5])){
        document.querySelector('#result').innerText = 'Game Over'+winner();
        gameOver = true;
    }
}