
// primitive type
let myName: string;
myName = "anhvi";
console.log("string -> my name: ",myName);

let myAge: number;
myAge = 31;
console.log("number -> my age: "+myAge);

let marriaged: boolean;
marriaged = true;
console.log("boolean -> marriaged: "+marriaged);

// array
let hobbies: string[] = ["cf", "bida", "money"];
console.log("array -> hobbie 1: "+hobbies[0]);
console.log("array -> hobbies: "+hobbies);

// any
let address: any = {
    location: "danang",
    country: "vietnam"
};
console.log("any -> location: "+address.location);
address = "i am from mars";
console.log("any -> address: "+address);

// noImplicitAny
let career = "developer";
console.log("career: "+career);

// function
function greeting(){
    console.log("hello greeting");
}
let message = greeting;
message();

// object
function printName(obj: {first: string; last?: string}){
    console.log(obj.first);
    // normal check
    if(obj.last !== undefined){
        console.log(obj.last);
    }
    // modern way to check undefined
    console.log(obj.last?.toUpperCase());
}
console.log("---start object---");
printName({first: "anhvi"});
printName({first: "anhvi", last: "nong"});
console.log("---end object---");

// union 
function printId(id: number | string){
    console.log("your id is: "+id);
}
console.log("---start union")
printId(10);
printId("ten");
console.log("---end union");

// alias
type PersonAlias = {
    name: string;
    age: number;
}
function greet2(person: PersonAlias){
    return "hello: "+person.name+"-"+person.age;
}
type clazz = number | string;
function printClazz(clazz: clazz){
    console.log(clazz);
}
console.log("---start alias");
console.log(greet2({name: "vi", "age": 32}));
printClazz(10);
printClazz("ten");
console.log("---end alias");


// interface
interface PersonInterface{
    name: string;
    age: number;
}
function greet1(person: PersonInterface){
    return "hello: "+person.name;
}
console.log("---start interface");
const rs = greet1({name: "vi", age: 33});
console.log(rs);
console.log("---end interface");

// class
class PersonClass{
    name: string;
    age: number;
}
function greet3(person: PersonClass){
    return "hello: "+person.name;
}
console.log("---start class");
const personClass = new PersonClass();
personClass.name = "name from class";
personClass.age = 300;
console.log(greet3(personClass));
console.log("---end class");


// tuples