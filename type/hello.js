// primitive type
var myName;
myName = "anhvi";
console.log("my name: ", myName);
var myAge;
myAge = 31;
console.log("my age: " + myAge);
var marriaged;
marriaged = true;
console.log("marriaged: " + marriaged);
// array
var hobbies = ["cf", "bida", "money"];
console.log("hobbie 1: " + hobbies[0]);
console.log("hobbies: " + hobbies);
// any
var address = {
    location: "danang",
    country: "vietnam"
};
console.log("location: " + address.location);
// noImplicitAny
var career = "developer";
console.log("career: " + career);
// function
function greeting() {
    console.log("hello greeting");
}
var message = greeting;
message();
function greet1(person) {
    return "hello: " + person.name;
}
function greet2(person) {
    return "hello: " + person.name;
}
// class
var PersonClass = /** @class */ (function () {
    function PersonClass() {
    }
    return PersonClass;
}());
function greet3(person) {
    return "hello: " + person.name;
}
// tuples
