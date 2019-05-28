function reducer(arr) {
    console.log(`Sum = ${arr.reduce((acc, cur) => acc + cur)}`);
    console.log(`Min = ${arr.sort((a, b) => a - b)[0]}`);
    console.log(`Max = ${arr.sort((a, b) => a - b)[arr.length - 1]}`);
    console.log(`Product = ${arr.reduce((acc, cur) => acc * cur)}`);
    console.log(`Join = ${arr.reduce((acc, cur) => acc + cur, "")}`);
}

reducer([2, 3, 10, 5]);