function negPosNums(input) {
    let resultArr = [];
    input.filter((x) => {
        if (x < 0) {
            resultArr.unshift(x);
        } else {
            resultArr.push(x);
        }
    });
    return resultArr;
}
negPosNums([7, -2, 8, 9]);