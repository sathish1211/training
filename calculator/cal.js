var textbox = document.getElementById("textbox");
var buttons = document.getElementsByTagName("button");
var result = document.getElementsByClassName("result")[0];
var resultBefore=document.getElementsByClassName("result1")[0];
Array.from(buttons).forEach(button => {
    button.addEventListener("click", e => {
        var buttonText = button.innerText;
        if (buttonText === "C") {
            textbox.value = " ";
            result.innerText=" ";
            resultBefore.innerText=" ";
        }
        else if(buttonText==="D")
            textbox.value=textbox.value.slice(0,-1);
        else if (buttonText === "=") 
        {
            resultBefore.innerHTML += textbox.value + " = " + result.innerText +"<br>" ;
            textbox.value=result.innerText;
            result.innerText=" ";
        }
        else {
            textbox.value += buttonText;
            var numbers=textbox.value.match(/\d+(\.\d+)?/g).reverse();
            var operation=textbox.value.match(/[\+\-\x\%\÷]/g).reverse();
            while(operation!=0){
                var symbol=operation.pop(); 
                if(symbol=="+"){
                     num1=parseFloat(numbers.pop());
                     num2=parseFloat(numbers.pop());
                     numbers.push(num1+num2);
                     result.innerText=numbers;
                }
                else if(symbol== "-"){
                     num1=parseFloat(numbers.pop());
                     num2=parseFloat(numbers.pop());
                     numbers.push(num1-num2);
                     result.innerText=numbers;
                }
                else if(symbol== "x"){
                     num1=parseFloat(numbers.pop());
                     num2=parseFloat(numbers.pop());
                     numbers.push(num1*num2);
                     result.innerText=numbers;
                }
                else if(symbol== "÷"){
                     num1=parseFloat(numbers.pop());
                     num2=parseFloat(numbers.pop());
                     numbers.push(num1/num2);
                     result.innerText=numbers;
                }
                else if(symbol== "%"){
                     num1=parseFloat(numbers.pop());
                     num2=parseFloat(numbers.pop());
                     numbers.push((num1*num2)/100);
                     result.innerText=numbers;
                 }  
            }   
        } 
    });
});
