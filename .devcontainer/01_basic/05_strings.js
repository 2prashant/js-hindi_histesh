const name="hitesh"
const repoCount=50
//console.log(name+repoCount+" value");

console.log(`hello my name is ${name} and repo count is ${repoCount}`);

const gamename=new String('hiteshhc')
console.log(gamename);

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString=gamename.substring(0,4);
console.log(newString);

const anotherString=gamename.slice(-8,4);
console.log(anotherString);

const newStringOne="    hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim())


const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'))
