function solve(arr) {
    const [x1, y1, x2, y2] = arr;

    function check(x, y, a = 0, b = 0) {
        let deltaX = x - a;
        let deltaY = y - b;

        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance % 1 === 0) {
            console.log(`{${x}, ${y}} to {${a}, ${b}} is valid`);
        } else {
            console.log(`{${x}, ${y}} to {${a}, ${b}} is invalid`);
        }
    }

    check(x1, y1);
    check(x2, y2);
    check(x1, y1, x2, y2);
}

solve([3, 0, 0, 4]);