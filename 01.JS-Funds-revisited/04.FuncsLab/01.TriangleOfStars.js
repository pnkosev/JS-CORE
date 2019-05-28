function solve(n) {
    function printStars(num) {
        console.log("*".repeat(num));
    }
    for (let i = 1; i <= n; i++) {
        printStars(i);
    }
    for (let i = n - 1; i > 0; i--) {
        printStars(i);
    }
}

solve(5);