function storeCatalogue(input) {
    let data = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');

        if (!data[product]) {
            data[product] = +price;
        }
    }

    let initals = new Set();
    [...Object.keys(data)].forEach((k) => initals.add(k[0]));

    let sortedInitials = [...initals.keys()].sort();
    let sortedData = [...Object.entries(data)].sort();

    for (let char of sortedInitials) {
        console.log(char);

        for (let [product, price] of sortedData) {
            if (product.startsWith(char)) {
                console.log(`  ${product}: ${price}`)
            }
        }
    }
}
storeCatalogue(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);