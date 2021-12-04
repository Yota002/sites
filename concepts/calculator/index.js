let inputText1 = document.getElementById("num1");
let inputText2 = document.getElementById("num2");
let buttonPlus = document.getElementById("button-plus");
let buttonMinus = document.getElementById("button-minus");
let buttonMultiply = document.getElementById("button-multiply");
let buttonDivide = document.getElementById("button-divide");
let buttonEnter = document.getElementById("button-calc");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let buttons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide];
let operation;
let buttonDefaultStyle = buttonMultiply.style;

buttons.forEach(button => button.onclick = function() {operationF(button)});

inputText1.onkeydown = function(k) {
    numbers.forEach(n => {
        if (k.key != n) return;
    });
};

inputText2.onkeydown = function(k) {
    if (k.keyCode == 13) {
        inputText1.value = calc(Number(inputText1.value), Number(inputText2.value), operation);
        inputText2.value = "";
    }
};

buttonEnter.onclick = function() {
    inputText1.value = calc(Number(inputText1.value), Number(inputText2.value), operation);
    inputText2.value = "";
}

function calc(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Нет операций";
    }
}

function operationF(button) {
    buttons.forEach(b => {
        if (b != button) {
            b.style = buttonDefaultStyle;
        } else {
            button.style.backgroundColor = "tomato";
            operation = button.value;
        }
    });
}