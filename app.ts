const person = {
    name: "Alisha",
    getName: function () {
      return this.name; 
    },
  };
  console.log(person.getName()); 
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
      return this.length * this.width; 
    },
  };
  console.log(rectangle.calculateArea()); 
const myObject = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property); 
      const innerMethod = () => {
        console.log(this.property);
      };
      innerMethod();
    },
  };
  myObject.outerMethod();
  