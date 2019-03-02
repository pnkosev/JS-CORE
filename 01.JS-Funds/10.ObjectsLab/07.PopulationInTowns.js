function populationInTowns(input) {
    let map = new Map();

    for (let line of input) {
        let tokens = line.split(' <-> ');
        let town = tokens[0];
        let population = +tokens[1];

        !map.has(town) ? map.set(town, population) : map.set(town, map.get(town) + population);
    }

    for (let [town, population] of map) {
        console.log(`${town} : ${population}`);
    }
}
populationInTowns(
    ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);