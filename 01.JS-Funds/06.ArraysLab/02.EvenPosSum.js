function sumEvenPos(input) {
    let evenPosArr = [];
    input.filter((x , i) => {
        if (i % 2 === 0) {
            evenPosArr.push(x);
        }
    });
    return evenPosArr.join(" ");
}
sumEvenPos(['20', '30', '40']);