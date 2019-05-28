function solve(arr) {
    let arrCopy = arr.slice(0);
    let n = arrCopy.pop();

    let result = arrCopy.filter((e, i) => i % +n === 0);
    console.log(result.join('\n'));
}

solve(['5', '20', '31', '4', '20', '2']);