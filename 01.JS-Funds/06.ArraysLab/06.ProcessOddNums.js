function processOddNums(input) {
    console.log(input.filter((x, i) => i % 2 === 1).map(num => num * 2).reverse().join(" "));
}
processOddNums([10, 15, 20, 25]);