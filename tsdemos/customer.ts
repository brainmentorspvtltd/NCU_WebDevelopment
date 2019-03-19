class Customer{
    private id:number;
    protected bonus:number;
    static counter:number = 0;
    constructor(id:number, private name:string, private _salary:number){
        this.id = id;
        Customer.counter ++;
        this.bonus = 10000;
    }
    public set salary(sal:number):void{
        this._salary = sal;
    }
    public get salary():number{
        return this._salary;
    }
    print():void{
        console.log(` Id is ${this.id} Name is ${this.name} Salary is ${this.salary}`);
    }

}
var customer:Customer = new Customer(1001, 'Ram',9000);
customer.salary = 10000;

customer.print();

var customer2:Customer = new Customer(1001, 'Ram',9000);
customer2.salary = 10000;

customer2.print();
console.log('Objects are ',Customer.counter);