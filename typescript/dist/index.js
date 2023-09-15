"use strict";
// let a=1
// let a="abc"
// console.log(a)
// class A{
//     a=10
//     b=20
//     constructor(a,b){
//             this.a=a;
//             this.b=b;
//     }
//     sum(){
//         return this.a+this.b;
//     }
// }
// let s=new A(5,7)
// console.log(s.a)
// console.log(s.sum())
// let a:number=2
// var any1;
// var num1:number=2;
// var num2:number=2;
//  var num3=3
//  var num4=num3+100;
//  var str1= num1+"some string";
//  var nothapy= number = num1 +"somestring";
//  console.log(any1)
//  console.log(num1)
//  console.log(num2)
//  console.log(num3)
//  console.log(num4)
//  console.log(str1)
//  console.log(nothapy)
// union type
// let a:number|string;
// a=123
// console.log(a)
// a="sathish"
// console.log(a)
//array
// let A:number[];
// A=[2,5,70,82,12]
// console.log(A)
// let b:(number|string)[];
// b=['sathish',45,'jeeva',49]
// console.log(b)
//object
// let a:{name:string;age:number}[]=[{name:'sathish',age:21},{name:'jeeva',age:19},{name:'sathiya',age:45},{name:'balamurugan',age:60}]
// console.log(a)
// let c=a.map(e=>{
//     if(e.name.length >5)
//       return e.name;
// }).filter(e=>{
//     if(e!='undefined')
//        return e;
// })
// console.log(c)
//a:Array<number>=[1]
//Function
// function sum (a:number,b:number):number {
//     return (a+b);
// }
// let a:number=1;
// let b:number=2;
// let c=sum(a,b)
// console.log(c)
// let a:number[]=[1,2,3,4]
// let c:number=a.reduce((i,b)=>i+b,0)
// console.log(c)
//Default function
// function sum (a:number,b:number=0):number {
//     return (a+b);
// }
// let a:number=1;
// let c=sum(a)
// console.log(c)
//                                 Optional function
// function sum (a:number,b:number,d?:number):number {
//     if(d!=undefined){
//         return a+b+d;
//     }
//     else{
//     return (a+b);
//     }
// }
// let a:number=1;
// let b:number=2;
// let c=sum(a,b)
// console.log(c)
//                         Dynamic function
// function sum (a:number,...b:number[]):number {
//        return a+b.reduce((ac,j)=>ac+j,0)
//     }
// let c=sum(1,2,3,4)
// console.log(c)
