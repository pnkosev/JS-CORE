function solve(matrix) {
    let isMagic = false;
    if (matrix.length > 1 && matrix[0].length > 0) {
        let equalCols = matrix.every(row => row.length === matrix[0].length);
        let squareMatrix = matrix[0].length === matrix.length;
        if (equalCols && squareMatrix) {
            let result = matrix
                .map(arr => {
                    return arr
                })
                .reduce((acc, cur) => {
                    cur = cur
                        .reduce((innerAcc, innerCurr) => {
                            return innerAcc += +innerCurr;
                        });
                    acc.push(cur);
                    return acc;
                }, []);

            isMagic = result.every(e => e === result[0]);
        }
    }
    console.log(isMagic);
}

// function solve(matrix) {
//     let isMagic = true;

//     let targetSum = matrix[0].reduce((acc, cur) => acc += cur, 0);

//     let sumRow = 0;
//     let sumCol = 0;

//     for (let r = 1; r < matrix.length; r++) {
//         sumRow = matrix[r].reduce((acc, cur) => acc += cur, 0);
//         if (sumRow !== targetSum) {
//             isMagic = false;
//             break;
//         }
//     }

//     for (let c = 0; c < matrix[0].length - 1; c++) {
//         sumCol = matrix.map(arr => arr[c]).reduce((acc, cur) => acc += cur, 0);
//         if (sumCol !== targetSum) {
//             isMagic = false;
//             break;
//         }
//     }

//     console.log(isMagic);
// }

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
]);

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);