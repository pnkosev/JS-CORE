function solve(rows, cols) {
    let num = 1;

    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = rows - 1;
    let endCol = cols - 1;

    while (startRow <= endRow || startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num++;
        }

        for (let i = startRow + 1; i <= endRow; i++) {
            matrix[i][endCol] = num++;
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            matrix[endRow][i] = num++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            matrix[i][startCol] = num++;
        }

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    
    matrix.forEach(arr => console.log(arr.join(' ')));
}

solve(5, 5);

// 1 2 3 
// 8 9 4
// 7 6 5