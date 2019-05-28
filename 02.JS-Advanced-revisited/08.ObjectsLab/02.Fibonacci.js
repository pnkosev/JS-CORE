function getFibonator() {
    let num1 = 0;
    let num2 = 1;

    return function () {
        let oldNum1 = num1;
        let oldNum2 = num2;
        num1 = oldNum2;
        num2 = oldNum1 + oldNum2;
        return oldNum2;
    };
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
