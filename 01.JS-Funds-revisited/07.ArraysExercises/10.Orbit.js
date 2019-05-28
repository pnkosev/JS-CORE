function solve(arr) {
    let [width, height, x, y] = arr;
    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    matrix.forEach(arr => console.log(arr.join(' ')));
}

solve([5, 5, 0, 0]);