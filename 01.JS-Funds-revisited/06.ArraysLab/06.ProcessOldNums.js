function solve(arr) {
    let result = arr
        .filter((n, i) => {
            return i % 2 !== 0;
        })
        .map(n => n * 2)
        .reverse()
        .join(' ');
    console.log(result);
}

solve([3, 0, 10, 4, 7, 3]);