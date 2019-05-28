function solve(num) {
    function checker(num) {
        num = num.toString();
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += +num[i];
        }
        if (sum / num.length >= 5) {
            return false;
        } else {
            return true;
        }
    };

    let addNines = () => num + '9';

    while (checker(num)) {
        num = addNines();
    }

    return num;
}

console.log(solve(101));