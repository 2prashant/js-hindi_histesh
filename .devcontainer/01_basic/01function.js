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
console.log("Result",result)

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
console.log(loginUserMessage("prasahnt"))