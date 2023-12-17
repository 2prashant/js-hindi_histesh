// Primitive

// 7 types: String, Number, Boolean ,null,umdefined, Symbol,BigInt

let str="hisar"

const score=100
const scorevalue=100.3

const isloggIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=34567898765432345678n
// Reference (Non Primitive)
// Array, object, function

const heros=["saktiman","naagraj","doga"];

let myobj={
    name:"prashant",
    age:22
}

const myFunction=function(){
    console.log("Hello World");
}


//================================================

//stack (primitive), Heap (non Premitive)

let Myyoutubename="hiteshChoudharydotcom"
let anothername=Myyoutubename
anothername="chai"

console.log(anothername);
console.log(Myyoutubename);


let userOne={
    email:"user@google.com",
    upi:"user@bly"
}

let userTwo=userOne

userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
