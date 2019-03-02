function systemComps(input) {
    let map = new Map();

    for (let line of input) {
        let [system, comp, subComp] = line.split(' | ');

        if (!map.has(system)) {
            map.set(system, new Map());
        }
        if (!map.get(system).has(comp)) {
            map.get(system).set(comp, []);
        }
        map.get(system).get(comp).push(subComp);
    }

    let sortedSystems = [...map.keys()]
        .sort()
        .sort((a, b) => map.get(b).size - map.get(a).size);

    for (let key of sortedSystems) {
        console.log(key);
        let sortedComps = Array.from(map.get(key).keys())
            .sort((a, b) => map.get(key).get(b).length - map.get(key).get(a).length);
        for (let comp of sortedComps) {
            console.log(`|||${comp}`);

            map.get(key).get(comp).forEach((item) => console.log(`||||||${item}`));
            // for (let subComp of map.get(key).get(comp)) {
            //     console.log(`||||||${subComp}`);
            // }
        }
    }

    // function sortSystems(s1, s2) {
    //     if(systems.get(s1).size != systems.get(s2).size) {
    //         return systems.get(s2).size - systems.get(s1).size;
    //     } else {
    //         return s1.toLowerCase().localeCompare(s2.toLowerCase());
    //     }
    // }

    // function sortComponents(system, c1, c2) {
    //     return systems.get(system).get(c2).length - systems.get(system).get(c1).length;
    // }
}
systemComps([
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