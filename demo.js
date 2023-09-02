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
total=b.reduce((a,b)=>{
    console.log(a+"a")
    console.log(b+"b")
    return a+b;
},0)
console.log(total)
