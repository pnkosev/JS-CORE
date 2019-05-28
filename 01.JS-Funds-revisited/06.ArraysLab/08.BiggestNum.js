function solve(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    let result = matrix
        .map(arr => arr
            .map(e => biggestNum = Math.max(e, biggestNum)))
        // .map(arr => {
        //     return arr.sort((a, b) => a - b);
        // })
        // .map(arr => {
        //     return arr[arr.length - 1]
        // })
        // .sort((a, b) => a - b)
        // .pop();

    console.log(biggestNum);
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );