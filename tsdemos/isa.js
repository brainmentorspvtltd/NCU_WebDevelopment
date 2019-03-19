var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
        console.log('I am Parent ');
    }
    Parent.prototype.print = function () {
        console.log(' I am Print');
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super.call(this) || this;
        console.log('I am Child ');
        return _this;
    }
    Child.prototype.disp = function () {
        console.log(" Disp in Child");
    };
    Child.prototype.show = function () {
        console.log('I am Show');
    };
    Child.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(' I am Print2');
    };
    return Child;
}(Parent));
var child = new Child(); // Upcast
child.print();
child.disp();
if (child instanceof Child) {
    var c = child; // Downcast
    c.show();
}
