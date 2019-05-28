function subtract() {
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');
    let result = document.getElementById('result');

    result.textContent = +num1.value - +num2.value;
}