// const tinderUser=new object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggIn=false
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"hitesh",
            lastname:"choudhary"

        }
    }
}
//console.log(regularUser.fullname)
//console.log(regularUser.fullname.username.firstname)

const obj1={1:"a", 2:"g"}
const obj2={2:"h",  3:"b"}
const obj4={5:"a",2:"b"}
// const obj3={obj1,obj2}
//console.log(obj3)

//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3)

const user=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
//console.log(user[1].email)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// const {courseInstructor}=course
// console.log(courseInstructor);


const {courseInstructor:instructor}=course
console.log(instructor);


{
      "name":"hitesh",
      "coursename":"js in hindi",
      "price":"free"
}
[
    {},
    {},
    {}
]
