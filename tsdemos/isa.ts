abstract class Parent{
    constructor(){
        console.log('I am Parent ');
    }
    print():void{
        console.log(' I am Print')
    }
abstract disp():void;
}
class Child extends Parent{
    constructor(){
        super();
        console.log('I am Child ');
    }
    disp():void{
        console.log(" Disp in Child")
    }
    show():void{
        console.log('I am Show')
    }
    print():void{
        super.print();
        console.log(' I am Print2')
    }
}
var child:Parent = new Child(); // Upcast
child.print();
child.disp();
if(child instanceof Child){
    let c:Child = child as Child;  // Downcast
    c.show();
}

