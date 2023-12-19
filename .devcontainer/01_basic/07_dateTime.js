let MyDate=new Date()
console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleString());
console.log(typeof MyDate);

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1=new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());


let date1=new Date("2023-01-14");
console.log(date1.toLocaleString());

let Date2=new Date("01-14-2023")
console.log(Date2.toLocaleString);

let MyTimeStamp=Date.now();
console.log(MyTimeStamp);
console.log(myCreatedDate.getTime());

let newDate=new Date();
console.log(newDate);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate1=new Date();
console.log(newDate1);
console.log(newDate1.getMonth()+1);

//'${newDate.getDay()} and the time'
newDate.toLocaleString('default',{
     weekday:"long"
})


