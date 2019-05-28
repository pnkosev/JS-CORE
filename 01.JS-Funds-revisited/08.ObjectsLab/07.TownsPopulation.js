function solve(arr) {
    let arrCopy = arr.slice(0);
    let obj = arrCopy
        .reduce((acc, cur) => {
            cur = cur.split(' <-> ');
            const town = cur[0];
            const population = cur[1];
            if (acc[town]) {
                acc[town] += +population;
                return acc;
            }
            acc[town] = +population;
            return acc;
        }, {});
    console.log(obj);
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);