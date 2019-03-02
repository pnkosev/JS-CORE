function rounding(input) {
    let num = input[0],
        precision = input[1];
    if (precision > 15) {
        precision = 15;
    }
    num = +num.toFixed(precision);
    console.log(+num);
}
rounding([10.5, 3]);