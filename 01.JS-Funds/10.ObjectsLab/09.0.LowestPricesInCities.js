function lowestPrices(input) {
    let dataObj = input
        .map((item) => {
            let townInfo = item.split(' | ');

            return {
                city : townInfo[0],
                product : townInfo[1],
                price : +townInfo[2]
            };
        });

    let result = dataObj
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

    Object.keys(result)
            .forEach((item) => {
                //Sample Product -> 1000 (Sample Town)
                console.log(`${item} -> ${result[item].price} (${result[item].city})`);
            });
}
lowestPrices(
    ['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
   ' New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);