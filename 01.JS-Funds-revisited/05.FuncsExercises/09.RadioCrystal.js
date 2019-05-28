function solve(arr) {
    let [endProduct, ...rest] = arr;

    let lastOp = '';
    let ops = {
        cut: 0,
        lap: 0,
        grind: 0,
        etch: 0,
        xray: 0
    }

    function operate(op) {
        switch (op) {
            case 'cut': return (x) => x / 4;
            case 'lap': return (x) => x = x - (x / 5);
            case 'grind': return (x) => x - 20;
            case 'etch': return (x) => x - 2;
            case 'xray': return (x) => x + 1;
            case 'tw': return (x) => Math.floor(x);
        }
    }

    for (let i = 0; i < rest.length; i++) {
        let product = rest[i];

        console.log(`Processing chunk ${product} microns`);

        while (endProduct !== product) {
            if (operate('cut')(product) - endProduct >= -1) {
                if (lastOp !== 'Cut' && lastOp !== '') {
                    console.log(`${lastOp} x${ops[lastOp.toLowerCase()]}`);
                    ops[lastOp.toLowerCase()] = 0;
                    product = operate('tw')(product);
                    console.log('Transporting and washing');
                }
                product = operate('cut')(product);
                lastOp = 'Cut';
                ops.cut += 1;
            } else if (operate('lap')(product) - endProduct >= -1) {
                if (lastOp !== 'Lap' && lastOp !== '') {
                    console.log(`${lastOp} x${ops[lastOp.toLowerCase()]}`);
                    ops[lastOp.toLowerCase()] = 0;
                    product = operate('tw')(product);
                    console.log('Transporting and washing');
                }
                product = operate('lap')(product);
                lastOp = 'Lap';
                ops.lap += 1;
            } else if (operate('grind')(product) - endProduct >= -1) {
                if (lastOp !== 'Grind' && lastOp !== '') {
                    console.log(`${lastOp} x${ops[lastOp.toLowerCase()]}`);
                    ops[lastOp.toLowerCase()] = 0;
                    product = operate('tw')(product);
                    console.log('Transporting and washing');
                }
                product = operate('grind')(product);
                lastOp = 'Grind';
                ops.grind += 1;
            } else if (operate('etch')(product) - endProduct >= -1) {
                if (lastOp !== 'Etch' && lastOp !== '') {
                    console.log(`${lastOp} x${ops[lastOp.toLowerCase()]}`);
                    ops[lastOp.toLowerCase()] = 0;
                    product = operate('tw')(product);
                    console.log('Transporting and washing');
                }
                product = operate('etch')(product);
                lastOp = 'Etch';
                ops.etch += 1;
            } else if (operate('xray')(product) - endProduct >= -1 && ops.xray <= 1) {
                if (lastOp !== 'Xray' && lastOp !== '') {
                    console.log(`${lastOp} x${ops[lastOp.toLowerCase()]}`);
                    product = operate('tw')(product);
                    console.log('Transporting and washing');
                }
                product = operate('xray')(product);
                lastOp = 'Xray';
                ops.xray += 1;
                console.log(`X-ray x${ops[lastOp.toLowerCase()]}`);
                ops[lastOp.toLowerCase()] = 0;
            }
        }
        if (ops[lastOp.toLowerCase()] !== 0) {
            console.log(`${lastOp} x${ops[lastOp.toLowerCase()]}`);
        }
        if (lastOp !== 'Xray') {
            console.log('Transporting and washing');
        }
        console.log(`Finished crystal ${product} microns`);
        lastOp = '';
        ops = {
            cut: 0,
            lap: 0,
            grind: 0,
            etch: 0,
            xray: 0
        }
    }

}

solve([1000, 4000, 8100]);