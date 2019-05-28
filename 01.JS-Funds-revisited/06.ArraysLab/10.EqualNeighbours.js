function solve(arr) {
    let matches = 0;
    let previousArr = [];
    arr.forEach((inner) => {
        inner.forEach((el, i) => {
            if (el === inner[i - 1] || el === inner[i + 1] || inner[i] === previousArr[i]) {
                matches++;
            }
        })
        previousArr = inner.slice(0);
    });
    console.log(matches);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);