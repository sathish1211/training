const event=document.getElementById("event")
const todolist=document.getElementById("todoList")
event.addEventListener('keypress',(e)=>{
   if(e.code === "Enter"){
    let todo=  e.target.value;
    let todoItem=document.createElement('li');
    let todoId=new Date().getTime();
    todoItem.innerHTML=`             
     <input id="${todoId}" type="checkbox">
     <label for="${todoId}"  >${todo}</label> ` ;
    todolist.appendChild(todoItem)
   }
});