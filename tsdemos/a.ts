var a =10;
var b:number = 100; 
var c:string = 'Amit';
var d:boolean = true;
console.log('B is ',b);
//b = 'Hello';
console.log('A is ',a);
//a = 'Amit';
++a;
console.log('A is ',a);

function add(a:number,b:number):number{
    return a + b;
}
var result:number = add(10,20);
console.log('result is ',result);

function show():void{
    console.log('Inside Show');
}
function adder(a:any, b:any):any{
    return a + b;
}
var t:number[] = [10,20 ,30,40,50];
var object:{id:number, name:string} = {id:1001, name:'Ram'};
type myType = {id:number, name:string};
var obj2:myType = {id:1001, name:'Ram'};
var obj2:myType;
obj2= {id:1002, name:'TTTT'};
var m2:string|number = 10001;
m2 = 'Hello';
//m2 = true; // Error
var tup:[string, number , boolean] = ['Ram',10,true];
enum Week  {
    SUNDAY=10, MONDAY
}
console.log('Week is ',Week.SUNDAY);
console.log('Week is ',Week.MONDAY);






