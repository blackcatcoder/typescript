
console.log("hello world");


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
class PersionClass{
    name: string;
    age: number;
}
function greet2(person: PersonClass){
    return "hello: "+person.name;
}