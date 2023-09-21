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
// function sum (b:number[]):number[] {
//            return b.map(e=>e*e);
//         }
// let c:number[]=sum([1,2,3,4])
// console.log(c)
//Interface
// class Myclass{
//     readonly c:number=3;    //telling perticular property is readonly.Read only can be changed only constructor.
//     // a:number;
//     b:number=2;
//     a!:number;  //assian operators(initialized the value in some where in program)
//     constructor(){
//         // this.a=1;
//         this.c=20;      //get value to the variable(geter method)
//     }
// }
// let o=new Myclass()
// // console.log(o.a,o.b)
// o.a=5;      //set the value to varible(seter method)
// o.b=10;
// console.log(o.a,o.b,o.c)
//GET AND SET (ACCESS METHOD)
class Myclass {
    constructor() {
        this._val = "sathish"; //_val its is private variable
    }
    get val() {
        console.log("good day");
        return this._val;
    }
    set val(a) {
        console.log("good");
        this._val = String(a);
    }
}
let o = new Myclass();
// o.val=50;
console.log(o.val = 50);
console.log(o.val);
