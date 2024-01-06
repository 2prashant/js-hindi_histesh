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
console.log(regularUser.fullname.username.firstname)