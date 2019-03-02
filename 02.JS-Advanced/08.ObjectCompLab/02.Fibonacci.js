let fib = (function () {
    let f1 = 0;
    let f2 = 1;
    return function () {
        let oldF1 = f1;
        let oldF2 = f2;
        f1 = oldF2;
        f2 = oldF1 + oldF2;
        return oldF2;
    }
})();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
