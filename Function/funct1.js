
function display()
{
       console.log('p') 
       console.log('r') 
       console.log('a') 
       console.log('s') 
       console.log('h') 
       console.log('a') 
       console.log('n') 
       console.log('t') 
       console.log("===============")
}
//display()
//display()

function sum(num1,num2)
{
    console.log("sum: ",num1+num2)
    console.log("sum : "+(num1+num2))
    console.log(`sum: ${num1+num2}`)
}
//console.log(sum(2,3))

function print(value)
{
    if(value===undefined)
        {
            console.log("first Enter name ")
            return 
        }
    return value
}
//console.log(print())
//console.log(print("vishal"))

function collectvalue(var1,var2,var3, ...val)
{
    return (var1,var2,var3,val)
}
console.log(collectvalue(1,2,3,4,5,6,7,8,9,12,1,3,14,1,5,14,))
