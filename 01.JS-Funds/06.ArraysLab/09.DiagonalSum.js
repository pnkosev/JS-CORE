function diagonalSum(input) {
    // let mainDiagonalSum = 0;
    // let secondaryDiagonalSum = 0;

    // input.forEach((item, index) => { 
    //     mainDiagonalSum += +item
    //     .filter((innerItem, innerIndex) => { 
    //         return innerIndex === index;
    //     });
    // });

    // input.forEach((item, index) => { 
    //     secondaryDiagonalSum += +item
    //     .filter((innerItem, innerIndex) => { 
    //         return innerIndex === item.length - 1 - index;
    //     });
    // });

    let mainDiagonalSum = input
        .map((item, index) => {
            return +item
                .filter((innerItem, innerIndex) => {
                    return innerIndex === index;
                });
        })
        .reduce((acc, cur) => {
            return acc + cur;
        });

    let secondaryDiagonalSum = input
        .map((item, index) => {
            return +item
                .filter((innerItem, innerIndex) => {
                    return innerIndex === item.length - 1 - index;
                });
        })
        .reduce((acc, cur) => {
            return acc + cur;
        });

    console.log(mainDiagonalSum + " " + secondaryDiagonalSum);
}
diagonalSum([
    [20, 40],
    [10, 60]
]);