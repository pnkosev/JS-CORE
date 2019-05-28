function solve(a, b) {
    let smallest = Math.min(a, b);
    let devisor = 1;

    for (let i = 2; i <= smallest; i++) {
        if ((a % i === 0 && (b % i === 0))) {
            devisor = i;
        }
    }
    let arr = [];
    let num = '5';
    let obj = {};
    return devisor;
}


solve(252, 105);