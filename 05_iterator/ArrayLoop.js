//for of
// const arr=[1,2,3,4,5]

// for(const num of arr)
//     {
//         console.log(num);
//     }
// const greetings ="hello world!"
// for(const greet of greetings)
//     {
//         console.log(`Each char is ${greet}`)
//     }


//maps
const map=new Map()
map.set("In","india")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set("In","India")

//console.log(map)

// for(const [key, value] of map)
//     {
//         console.log(key,':-',value);
//     }

// const myObject={
//     'game':'NFS',
//     'game2':'Spiderman'
// }
// // not work because object not iterable
// for(const [key ,value] of object)
//     {
//         console.log(key,':-',value);
//     }

const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for(const key in myObject)
    {
        console.log(`${key} shortcut is for ${myObject[key]}`);
    }
const programming =['js','rb','java','cpp']
for(const key in programming)
    {
        console.log(programming[key]);
    }

