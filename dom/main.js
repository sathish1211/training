// const person={
//     name:"sathish",
//     place:"namakkal",
//     greetUser(){
//         return `hello, myname is ${this.name} and i am from ${this.place}`;
//     }
// };
// const nameinput=prompt("what ois yor name");
// const placeinput=prompt("wher you from");

// person.name=nameinput;
// person.place=placeinput;
// document.write(person.greetUser());

// let  headingEl=document.getElementById("y1");
// headingEl.innerText="sathish";
// console.log(headingEl.innerText)
let inputfood=document.getElementById(food_items)
let btn=document.getElementById(click)
let display=document.getElementById(food)
btn.addEventListener('click', ()=>{
  display.innerHTML+=`<li>${inputfood.value}</li>`;}
  )