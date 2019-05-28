function solve(a, b, op) {

    let add = (a, b) => a + b;
    let sub = (a, b) => a - b;
    let mul = (a, b) => a * b;
    let div = (a, b) => a / b;
    let calculate = (a, b, op) => op(a, b);

    switch(op) {
        case('+'): return calculate(a, b, add);
        case('-'): return calculate(a, b, sub);
        case('*'): return calculate(a, b, mul);
        case('/'): return calculate(a, b, div);
    }
}

console.log(solve(1, 2, '*'));