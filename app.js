var person = {
    name: "Alisha",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
