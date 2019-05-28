function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            cur = cur.split(' -> ');
            let town = cur[0];
            let item = cur[1];
            let sales = cur[2].split(' : ').map(Number);
            let amount = sales[0];
            let price = sales[1];
            if (!acc[town]) {
                acc[town] = {};
            }
            if (!acc[town][item]) {
                acc[town][item] = amount * price;
            } else {
                acc[town][item] += amount * price;
            }
            return acc;
        }, {});

    Object.keys(obj).forEach(key => {
        console.log(`Town - ${key}`);
        Object.keys(obj[key]).forEach(innerKey => {
            console.log(`$$$${innerKey} : ${obj[key][innerKey]}`);
        });
    });
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);