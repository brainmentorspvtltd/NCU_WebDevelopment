var a = 10;
var b = 100;
var c = 'Amit';
var d = true;
console.log('B is ', b);
//b = 'Hello';
console.log('A is ', a);
//a = 'Amit';
++a;
console.log('A is ', a);
function add(a, b) {
    return a + b;
}
var result = add(10, 20);
console.log('result is ', result);
function show() {
    console.log('Inside Show');
}
function adder(a, b) {
    return a + b;
}
var t = [10, 20, 30, 40, 50];
var object = { id: 1001, name: 'Ram' };
var obj2 = { id: 1001, name: 'Ram' };
var obj2;
obj2 = { id: 1002, name: 'TTTT' };
var m2 = 10001;
m2 = 'Hello';
//m2 = true; // Error
var tup = ['Ram', 10, true];
var Week;
(function (Week) {
    Week[Week["SUNDAY"] = 10] = "SUNDAY";
    Week[Week["MONDAY"] = 11] = "MONDAY";
})(Week || (Week = {}));
console.log('Week is ', Week.SUNDAY);
console.log('Week is ', Week.MONDAY);
