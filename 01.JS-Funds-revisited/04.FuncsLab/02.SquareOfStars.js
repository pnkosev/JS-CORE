function solve(n = 5) {
    function printSquare(num) {
        console.log("* ".repeat(num));
    }

    for (let i = 1; i <= n; i++) {
        printSquare(n);
    }
}

solve(8);