function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            cur = cur.split(' | ');
            let system = cur[0];
            let comp = cur[1];
            let subComp = cur[2];

            if (!acc[system]) {
                acc[system] = {
                    comps: {},
                    totalComps: 0
                };
            }
            if (!acc[system]['comps'][comp]) {
                acc[system]['comps'][comp] = [subComp];
                acc[system]['totalComps'] += 1;
            } else {
                acc[system]['comps'][comp].push(subComp);
            }
            return acc;
        }, {});

    let sortedObj = Object.entries(obj).sort((a, b) => b[1].totalComps - a[1].totalComps || a[0].localeCompare(b[0]));
    
    Object.entries(sortedObj).forEach(([a, b]) => {
        console.log(`${b[0]}`);
        Object.entries(b[1]).forEach(([el1, el2]) => {
            Object.entries(el2).forEach(([e1, e2]) => {
                console.log(`|||${e1}`);
                e2.forEach(e => console.log(`||||||${e}`));
            })
        })
    })
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);