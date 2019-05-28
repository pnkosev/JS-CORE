function solve(arr) {
    let initNum = +arr[0];

    for (let i = 1; i < arr.length; i++) {
        let op = arr[i];
        cook(op, initNum);
    };

    function cook(operation, number) {
        let op = getOp(operation);
        initNum = op(number);
        console.log(initNum);
    }

    function getOp(op) {
        switch(op) {
            case 'chop': return (x) => x / 2;
            case 'dice': return (x) => Math.sqrt(x);
            case 'spice': return (x) => x + 1;
            case 'bake': return (x) => x * 3;
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);