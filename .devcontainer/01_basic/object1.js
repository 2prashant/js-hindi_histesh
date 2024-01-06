// singleton
// object.create

// object literals

const mysym=Symbol("key1")


const jsUser={
    name:"hitesh",
    "full name":" Hitesh Choudhary",
    [mysym]:"myKey1",
    age:21,
    email:"hitesh@google.com",
    address:"Lucknow",
    isLoggedIn:false,
    lastLoginDayes:["monday","saturday"]

}
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser["full name"])
// console.log(jsUser.isLoggedIn)
// console.log(jsUser[mysym])

jsUser.email="hitesh@chatgpt.com"
//console.log(jsUser)
//Object.freeze(jsUser)
jsUser.email="hitest@facebook.com"
//console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
