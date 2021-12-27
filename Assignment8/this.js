console.log(this);
// "use strict"

//*************************************************************************** */

// Definition of this() method

// It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.




//************************************************************************* */

// const vijay = {
//     name: "yadav",
//     fname: "Vijay",
//     quali: "btech",
    function sum(){
        var add = 2+2;
console.log("Sum of two number is : " + add);
console.log(this.name);
console.log(this.fname);
    }    
this.sum();

// console.log("This is the second part ");

function sum() {
    var add = 2 + 2;
    console.log("Sum of two number is :" + add);
    console.log(this);
}
console.log(sum);







// The bind() method creates a new function, when invoked, has the this sets to a provided value.
// The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.


// Bind() Method From Here

console.log("Bind method");

const detail = {
    fname: "Vijay",
    lname: "Yadav",
    feature: function () {
        console.log(`${this.fname} ${this.lname} ${this.profession}` + "is a Intern  in techCooper");
    }
}
// console.log(detail);
// detail.feature  ();
let student = detail.feature;
student();

let student1 = detail.feature.bind(detail);
student1();
