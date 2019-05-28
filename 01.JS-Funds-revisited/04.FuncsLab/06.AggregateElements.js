function solve(arr) {
    // let sum = 0;
    // arr.forEach(e => sum += e);
    // console.log(sum);
    // let sumOfAll = 0;
    // arr.forEach(e => sumOfAll += 1 / e);
    // console.log(sumOfAll);
    // const concat = arr.join('');
    // console.log(concat);

    function aggregate(arr, initVal, op) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = op(val, arr[i]);
        }
        console.log(val);
    }

    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, '', (a, b) => a + b);
}

solve([2, 4, 8, 16])