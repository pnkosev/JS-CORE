function biggestElement(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    input.forEach(
        a => a.forEach(
            b => biggestNum = Math.max(biggestNum, b)
        )
    );
    return biggestNum;
}
biggestElement([[20, 50, 10], [8, 33, 145]]);