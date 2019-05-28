function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            let row = JSON.parse(cur).sort((a, b) => b - a);
            let stringified = `[${row.join(', ')}]`;
            acc[stringified] = row.length;
            return acc;
        }, {});
    
    let result = Object.entries(obj).sort((a, b) => a[1] - b[1]);
    result.forEach(el => console.log(el[0]));
}

// solve([
//     "[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]);

solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);