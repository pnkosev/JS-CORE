function solve(arr) {
    function inOrOut(x, y, z) {
        const x1 = 10, x2 = 50;
        const y1 = 20, y2 = 80;
        const z1 = 15, z2 = 50;

        if (x1 <= x && x2 >= x) {
            if (y1 <= y && y2 >= y) {
                if (z1 <= z && z2 >= z) {
                    return true;
                }
            }
        }
        return;
    }
    for (let i = 0; i <= arr.length - 1; i += 3) {
        const x = arr[i];
        const y = arr[i + 1];
        const z = arr[i + 2];
        if (inOrOut(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
}

solve([
    13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43
]);