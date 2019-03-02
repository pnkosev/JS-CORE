function sumFirstLast(input) {
    let first = +input[0];
    let last = +input[input.length - 1];
    return first + last;
}
sumFirstLast(['20', '30', '40']);