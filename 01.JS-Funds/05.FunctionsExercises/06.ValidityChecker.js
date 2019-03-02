function checkingValidity([x1, y1, x2, y2]) {
    x1 = +x1;
    y1 = +y1;
    x2 = +x2;
    y2 = +y2;

    function checking(x1, y1, x2, y2) {
        let deltaX = x2 - x1;
        let deltaY = y2 - y1;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance % 1 ===0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    checking(x1, y1, 0, 0);
    checking(x2, y2, 0, 0);
    checking(x1, y1, x2, y2);
}
checkingValidity([2, 1, 1, 1]);