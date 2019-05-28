function solve(arr) {
    const [x1, y1, x2, y2, x3, y3] = arr;

    let distanceBetweenPoints = (x, y, a, b) => Math.sqrt((x - a) * (x - a) + (y - b) * (y - b));

    let distance123 = distanceBetweenPoints(x1, y1, x2, y2) + distanceBetweenPoints(x2, y2, x3, y3);
    let distance132 = distanceBetweenPoints(x1, y1, x3, y3) + distanceBetweenPoints(x3, y3, x2, y2);
    let distance213 = distanceBetweenPoints(x2, y2, x1, y1) + distanceBetweenPoints(x1, y1, x3, y3);

    let shortestDistance = Math.min(distance123, distance132, distance213);

    if (shortestDistance === distance123) {
        console.log(`1->2->3: ${shortestDistance}`);
    } else if (shortestDistance === distance132) {
        console.log(`1->3->2: ${shortestDistance}`);
    } else if (shortestDistance === distance213) {
        console.log(`2->1->3: ${shortestDistance}`);
    }
}

solve([-1, -2, 3.5, 0, 0, 2]);