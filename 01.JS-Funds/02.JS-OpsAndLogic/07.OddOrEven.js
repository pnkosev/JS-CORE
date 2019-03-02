function oddOrEven(num) {
    num = Math.abs(num);
    if (+num % 2 != 0 && +num % 2 != 1) {
        console.log("invalid");
    } else if (+num % 2 != 0) {
        console.log("odd");
    } else if (+num % 2 == 0) {
        console.log("even");
    }
}
oddOrEven(-3);