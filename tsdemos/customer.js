var Customer = /** @class */ (function () {
    function Customer(id, name, _salary) {
        this.name = name;
        this._salary = _salary;
        this.id = id;
        Customer.counter++;
        this.bonus = 10000;
    }
    Object.defineProperty(Customer.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (sal) {
            this._salary = sal;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.print = function () {
        console.log(" Id is " + this.id + " Name is " + this.name + " Salary is " + this.salary);
    };
    Customer.counter = 0;
    return Customer;
}());
var customer = new Customer(1001, 'Ram', 9000);
customer.salary = 10000;
customer.print();
var customer2 = new Customer(1001, 'Ram', 9000);
customer2.salary = 10000;
customer2.print();
console.log('Objects are ', Customer.counter);
