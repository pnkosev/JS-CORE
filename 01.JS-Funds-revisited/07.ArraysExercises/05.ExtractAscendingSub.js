function solve(arr) {
    let currentBiggest = arr[0];
    let result = arr
        .filter(n => {
            if (n >= currentBiggest) {
                currentBiggest = n;
                return n;
            }
        });
    console.log(result.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);