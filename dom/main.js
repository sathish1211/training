const event=document.getElementById("event")
const todolist=document.getElementById("todoList")
event.addEventListener('keypress',(e)=>{
   if(e.code === "Enter" && e.target.value !=="")
   {
    let todo=  e.target.value;
    let todoItem=document.createElement('li');
    let todoId=new Date().getTime();
    todoItem.innerHTML=`             
     <input id="${todoId}" type="checkbox">
     <label for="${todoId}"  >${todo}</label> ` ;
    todolist.appendChild(todoItem);
    event.value="";
   }
});
todolist.addEventListener('click',(e)=>{
   if(e.target.checked)
      e.target.parentElement.style.textDecoration="line-through";
   else
   e.target.parentElement.style.textDecoration="none";
})