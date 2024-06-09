
//const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// })

// function printMe(item)
// {
//     console.log(item)
// }

//coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// const myCoding=[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"java",
//         languageFileName:"java"
//     },
//     {
//         languageName:"python",
//         languageFileName:"py"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })

//forEach method not return any value or object
// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//   //  console.log(item);
//   return item;
// })
// console.log(values)//undefind

const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.filter((num)=> num>4)
// const newNums=myNums.filter((item) => {
//    return item>4 //rember
// })
//console.log(newNums);

// const newNums=[]

// myNums.forEach((num) => {
//     if(num>4)
//         {
//             newNums.push(num)
//         }
// })
// console.log(newNums)

//filter
const books=[
    {
        title:"book one",genre:'scince',publish:1986,edition:1996
    },
    {
        title:"book two",genre:'history',publish:1986,edition:1996
    },
    {
        title:"book three",genre:'frunction',publish:1986,edition:1996
    },
    {
        title:"book four",genre:'non-fruction',publish:1986,edition:1996
    },
    {
        title:"book five",genre:'history',publish:1986,edition:1996
    },
    {
        title:"book Six",genre:'scince',publish:1986,edition:1996
    },
    {
        title:"book seven",genre:'history',publish:1986,edition:1996
    },
    {
        title:"book eight",genre:'non-fruction',publish:1986,edition:1996
    },
    {
        title:"book nine",genre:'frunction',publish:1986,edition:1996
    },
    {
        title:"book ten",genre:'scince',publish:1986,edition:1996
    },
    
]

const filterBook=books.filter((item)=> (item.genre==="history"))

console.log(filterBook)

