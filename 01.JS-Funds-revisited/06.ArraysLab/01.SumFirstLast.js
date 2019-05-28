function solve(arr) {
    let result = arr
        .map(n => +n)
        .reduce((acc, cur, i) => {
            if (i === 0 || i === arr.length - 1) {
                return acc + cur;
            }
            return acc;
        }, 0);

    return result;
}

solve(['20', '30', '50', '60', '40']);