function solve(arr) {
    let matrix = arr
        .map(e => e.split(' ').map(Number));

    let both = matrix
        .reduce((acc, cur, index) => {
            acc[0] = acc[0] || 0;
            acc[1] = acc[1] || 0;
            acc[0] += +cur[index];
            acc[1] += +cur[matrix.length - index - 1];
            return acc;
        }, []);

    if (both[0] === both[1]) {
        let newMatrix = matrix
            .map((arr, index) => {
                return arr
                    .map((e, i) => {
                        if (i !== index && i !== arr.length - 1 - index) {
                            return e = both[0];
                        }
                        return e;
                    })
            })
        newMatrix.forEach(arr => console.log(arr.join(' ')));
    } else {
        matrix.forEach(arr => console.log(arr.join(' ')));
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

solve([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);