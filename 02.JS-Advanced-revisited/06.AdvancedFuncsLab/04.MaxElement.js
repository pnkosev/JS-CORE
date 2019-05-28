// function solve(arr) {
//     let max = arr.reduce((a, b) => Math.max(a, b), Number.NEGATIVE_INFINITY);
//     return max;
// }

// console.log(solve([10, 20, 5]));

function solve(arr) {
    return Math.max.apply(null, arr);
}

console.log(solve([10, 20, 5]));
