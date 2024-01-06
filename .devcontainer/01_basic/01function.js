function saymyName()
{
    console.log("hello")
}
saymyName()

// function addTwoNumber(number1,number2)
// {
//     console.log(number1+number2);
// }
// console.log("SUM:",addTwoNumber(1,2))

function addTwoNumbers(number1,number2)
{
    let result=number1+number2
    return result
}

const result=addTwoNumbers(3,5)
//console.log("Result",result)

// function loginUserMessage(username)
// {
//     if(username===undefined)
//     {
//         console.log("plese enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

// function loginUserMessage(username)
// {
//     if(!username)
//     {
//         console.log("plese enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

function loginUserMessage(username="sam")
{
    if(username===undefined)
    {
        console.log("plese enter a username");
        return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("prasahnt"))

function calculateCartPrice(...num1)
{
    return num1;
}
//console.log(calculateCartPrice(1,2,3,4,5,6));

function calculateCartPrice(val1,val2,val3,...num1)
{
    return num1;
}
//console.log(calculateCartPrice(1,2,3,4,5,6));

const user={
    username:"hitesh",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobject(user)
// handleobject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getarray)
{
    return getarray[1]
}
console.log(returnSecondValue(myNewArray))



