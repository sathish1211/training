var textbox = document.getElementById("textbox");
var buttons = document.getElementsByTagName("button");
var display=document.getElementsByClassName("display").innerText="sathish"
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        textbox.value += this.innerText;
        display.textContent+=this.innerText;
    });
}

