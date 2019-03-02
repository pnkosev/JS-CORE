function compoundInterest(input) {
    let p = input[0],
        i = input[1] / 100,
        n = 12 / input[2],
        t = input[3];
    let compInt = p * Math.pow((1 + i / n), n * t);
    console.log(compInt.toFixed(2));
}
compoundInterest([1500, 4.3, 3, 6]);