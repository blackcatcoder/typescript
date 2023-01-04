
// primitive type
let myName: string;
myName = "anhvi";
console.log("my name: ",myName);

let myAge: number;
myAge = 31;
console.log("my age: "+myAge);

let marriaged: boolean;
marriaged = true;
console.log("marriaged: "+marriaged);

// array
let hobbies: string[] = ["cf", "bida", "money"];
console.log("hobbie 1: "+hobbies[0]);
console.log("hobbies: "+hobbies);

// any
let address: any = {
    location: "danang",
    country: "vietnam"
};
console.log("location: "+address.location);

// noImplicitAny
let career = "developer";
console.log("career: "+career);

// function
function greeting(){
    console.log("hello greeting");
}
let message = greeting;
message();


// interface
interface PersonInterface{
    name: string;
    age: number;
}
function greet1(person: PersonInterface){
    return "hello: "+person.name;
}

// alias
type PersonAlias = {
    name: string;
    age: number;
}
function greet2(person: PersonAlias){
    return "hello: "+person.name;
}

// class
class PersonClass{
    name: string;
    age: number;
}
function greet3(person: PersonClass){
    return "hello: "+person.name;
}


// tuples