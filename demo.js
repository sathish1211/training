a=[{name:"Dinesh",age:45},{name:"Jeeva",age:18},{name:"sarath",age:25},{name:"Raja",age:23}]
// function print(e){
//     console.log(e);
// }


// a.forEach(print)
// a.forEach(function(e){
//    console.log(e);
// })


// a.forEach(e=>console.log(e))


// print =function(e){
//     console.log(e)
// }
// a.forEach(print)

//MAP FUNCTION
b=[1,2,3,4,8.,10]
// mymap=function(e){
//     return e*e;
// }
// n = b.map(mymap)
// console.log(n)


// n=b.map(function(e){
//     return e*e;
// })
// console.log(n)


// n=b.map(e=> e*e)
// console.log(n)


//filter

// a1=b.filter(e=> e%2 ==0 );

// a2=b.map(e=>{
//     if(e%2==0)
//       return e;
// })
// console.log(a1)
// console.log(a2)


// total=b.reduce((a,b)=>{
//     console.log(a+"a")
//     console.log(b+"b")
//     return a+b;
// },0)
// console.log(total)



user=[{uid:1,name:"Dinesh",age:45,gender:"m",salary:1},
{uid:2,name:"Kiruba",age:90,gender:"m",salary:1},
{uid:3,name:"Jeeva",age:19,gender:"m",salary:1},
{uid:4,name:"uma",age:27,gender:"f",salary:1},
{uid:5,name:"nandhini",age:30,gender:"f",salary:1},
{uid:6,name:"Sathish",age:21,gender:"m",salary:1}]

user1={id:1, name:"Dinesh",age:45,gender:"m",sal:10000}
// function myfun(e){
//     console.log(e.sal)
// }
// myfun(user1)
// function myfun({sal}){
//     console.log(sal)
// }
// myfun(user1)

// total=user.reduce((a,b)=>a+b.salary,0)
// console.log(total)
// total=user.reduce((a,{salary})=>a+salary,0)
// console.log(total)
// c=0
// d=0
// total1=user.filter(e=>e.gender=="m"?c+=e.salary:d+=e.salary)
// console.log(c)
// console.log(d)
male=[]
female=[]
total=user.filter(e=> e.gender=="m"?male.push(e.salary):female.push(e.salary))
console.log("male"+":"+male.reduce((a,b)=>a+b))
console.log("female"+":"+(female.reduce((a,b)=>a+b)))
