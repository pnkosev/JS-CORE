function solve(arr) {
    let result = arr
        .filter((n, i) => i % 2 === 0)
        .join(' ');

    return result;
}

console.log(solve(['20', '30', '40']));