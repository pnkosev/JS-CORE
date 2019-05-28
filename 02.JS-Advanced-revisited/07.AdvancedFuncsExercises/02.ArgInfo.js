function solve(...args) {
    let result = {};
    for (const el of args) {
        let type = typeof el;
        if (!result[type]) {
            result[type] = [];
        }
        result[type].push(el);
        console.log(`${type}: ${el}`)
    }

    Object.keys(result).sort((a, b) => result[b].length - result[a].length).forEach(k => console.log(`${k} = ${result[k].length}`));

    // let sorted = Object.entries(result).sort((a, b) => b[1].length - a[1].length);

    // Object.keys(sorted).forEach(type => {
    //     console.log(`${sorted[type][0]} = ${sorted[type][1].length}`);
    // });
}

solve(42, 'cat', 15, 'kitten', 'tomcat')