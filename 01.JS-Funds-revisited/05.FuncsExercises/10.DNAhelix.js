function solve(n) {
    let str = 'ATCGTTAGGG';
    const count = n * 2;

    if (n * 2 > str.length) {
        let scale = Math.ceil(n * 2 / str.length);
        let initStr = str;
        for (let i = 0; i < scale; i++) {
            str += initStr;
        }
    }

    const str1 = str.slice(0, count);

    for (let i = 0; i < n; i++) {
        const a = str1[i + i];
        const b = str1[i + i + 1];
        if (i === 0 || i % 4 === 0) {
            console.log(`**${a}${b}**`);
        } else if (i === 1 || i % 2 === 1) {
            console.log(`*${a}--${b}*`);
        } else if (i % 2 === 0) {
            console.log(`${a}----${b}`);
        }
    }

}

solve(4);