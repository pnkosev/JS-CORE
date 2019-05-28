function solve(arr) {
    let obj = arr
        .map(a => {
            a = a.split(' | ');
            let town = a[0];
            let product = a[1];
            let price = a[2];

            return {
                town,
                product,
                price
            };
        })
        .reduce((acc, cur) => {
            if (!acc[cur.product]) {
                acc[cur.product] = cur;
                return acc;
            }
            if (acc[cur.product].price > cur.price) {
                acc[cur.product] = cur;
            }
            return acc;
        }, {});

    Object.keys(obj).forEach(product => {
        console.log(`${product} -> ${obj[product].price} (${obj[product].town})`);
    });
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);