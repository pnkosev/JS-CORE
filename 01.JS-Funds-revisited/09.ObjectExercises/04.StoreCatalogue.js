function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            cur = cur.split(' : ');
            let product = cur[0];
            let price = cur[1];
            if (!acc[product]) {
                acc[product] = price;
            }
            return acc;
        }, {});

    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    let firstLetter = '';

    sorted.forEach(product => {
        let currentLetter = product[0];
        if (currentLetter !== firstLetter) {
            console.log(currentLetter);
            firstLetter = currentLetter;
        }
        console.log(`  ${product}: ${obj[product]}`);
    });
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// solve([
//     'Banana : 2',
//     'Rubic\'s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'
// ]);