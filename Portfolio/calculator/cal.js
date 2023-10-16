var textbox = document.getElementById("textbox");
var buttons = document.getElementsByTagName("button");
var result = document.getElementsByClassName("result")[0];
var resultBefore=document.getElementsByClassName("result1")[0];
Array.from(buttons).forEach(button => {
    button.addEventListener("click", function() {
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
            resultBefore.innerHTML += `${textbox.value} = ${result.innerText}<br>`;
            textbox.value=result.innerText;
            result.innerText=" ";
        }
        else {
            textbox.value += buttonText;
            result.innerText= evaluate(textbox.value);
        }
    });
});
function evaluate(input) {
     const tokens = input.match(/\d+|\+|-|\x|\÷|\%/g);
    if (!tokens) {
        throw new Error("Invalid input");
    }
    const operators = [];
    const numbers = [];
    for (let e of tokens) {
        if (operator(e)) {
            while (operators.length > 0 && precedence(operators[operators.length - 1]) >= precedence(e)
            ) {
                apply(operators.pop(), numbers);
            }
            operators.push(e);
        } else {
            numbers.push(parseFloat(e));
        }
    }
    while (operators.length > 0) {
        apply(operators.pop(), numbers);
    }
    if (numbers.length !== 1 || operators.length !== 0) {
        throw new Error("Invalid input");
    }
    return numbers[0];
}
function operator(e) {
    return e === "+" || e === "-" || e === "x" || e === "÷"|| e=== "%";
}
function precedence(symbol) {
    switch (symbol) {
        case "+":
        case "-":
            return 1;
        case "*":
        case "/":
            return 2;
        case "%":
            return 3;
        default:
            return 0;
    }
}
function apply(operator, numbers) {
    const b = numbers.pop();
    const a = numbers.pop();
    switch (operator) {
        case "+":
            numbers.push(a + b);
            break;
        case "-":
            numbers.push(a - b);
            break;
        case "x":
            numbers.push(a * b);
            break;
        case "÷":
            if (b === 0) {
                throw new Error("Division by zero");
            }
            numbers.push(a / b);
            break;
        case "%":
            numbers.push((a * b)/100);
        default:
            throw new Error("Invalid operator");
    }

}

