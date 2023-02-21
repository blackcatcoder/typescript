// primitive type
var myName;
myName = "anhvi";
console.log("string -> my name: ", myName);
var myAge;
myAge = 31;
console.log("number -> my age: " + myAge);
var marriaged;
marriaged = true;
console.log("boolean -> marriaged: " + marriaged);
// array
var hobbies = ["cf", "bida", "money"];
console.log("array -> hobbie 1: " + hobbies[0]);
console.log("array -> hobbies: " + hobbies);
// any
var address = {
    location: "danang",
    country: "vietnam"
};
console.log("any -> location: " + address.location);
address = "i am from mars";
console.log("any -> address: " + address);
// type unknown
var nameUnknown;
nameUnknown = "anhvi";
console.log("unknown: " + nameUnknown);
// type never
// do not need to care, it is rarely used
// type undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
var nameUnderfined = undefined;
var nameNull = null;
// Declare a variable with - Explicit
var firstNameExplicit = "Dylan";
// Declare a variable with - Implicit
var firstNameImplicit = "Dylan";
// noImplicitAny
var career = "developer";
console.log("career: " + career);
// function
function greeting() {
    console.log("hello greeting");
}
var message = greeting;
message();
// object
function printName(obj) {
    var _a;
    console.log(obj.first);
    // normal check
    if (obj.last !== undefined) {
        console.log(obj.last);
    }
    // modern way to check undefined
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
console.log("---start object---");
printName({ first: "anhvi" });
printName({ first: "anhvi", last: "nong" });
console.log("---end object---");
// union 
function printId(id) {
    console.log("your id is: " + id);
}
console.log("---start union");
printId(10);
printId("ten");
console.log("---end union");
function greet2(person) {
    return "hello: " + person.name + "-" + person.age;
}
function printClazz(clazz) {
    console.log(clazz);
}
console.log("---start alias");
console.log(greet2({ name: "vi", "age": 32 }));
printClazz(10);
printClazz("ten");
console.log("---end alias");
function greet1(person) {
    return "hello: " + person.name;
}
console.log("---start interface");
var rs = greet1({ name: "vi", age: 33 });
console.log(rs);
console.log("---end interface");
// class
var PersonClass = /** @class */ (function () {
    function PersonClass() {
    }
    return PersonClass;
}());
function greet3(person) {
    return "hello: " + person.name;
}
console.log("---start class");
var personClass = new PersonClass();
personClass.name = "name from class";
personClass.age = 300;
console.log(greet3(personClass));
console.log("---end class");
// tuples
