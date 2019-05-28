function warehouse(input) {
    let obj = input
        .reduce((acc, cur) => {
            if (cur.startsWith('IN,')) {
                let line = cur.split(', ');
                let brand = line[1];
                let coffee = line[2];
                let expDate = line[3];
                let qty = line[4];

                if (!acc[brand]) {
                    acc[brand] = {
                        'coffees': {}
                    };
                    acc[brand]['coffees'][coffee] = {
                        expiryDate: expDate,
                        quantity: +qty
                    }
                } else if (acc[brand] && !acc[brand]['coffees'][coffee]) {
                    acc[brand]['coffees'][coffee] = {
                        expiryDate: expDate,
                        quantity: +qty
                    }
                } else if (acc[brand] && acc[brand]['coffees'][coffee] && acc[brand]['coffees'][coffee]['expiryDate'] < expDate) {
                    acc[brand]['coffees'][coffee] = {
                        expiryDate: expDate,
                        quantity: +qty
                    }
                } else if (acc[brand] && acc[brand]['coffees'][coffee] && acc[brand]['coffees'][coffee]['expiryDate'] === expDate) {
                    acc[brand]['coffees'][coffee]['quantity'] += +qty;
                }
                return acc;
            } else if (cur.startsWith('OUT')) {
                let line = cur.split(', ');
                let brand = line[1];
                let coffee = line[2];
                let expDate = line[3];
                let qty = line[4];
                if (acc[brand]
                    && acc[brand]['coffees'][coffee]
                    && acc[brand]['coffees'][coffee]['expiryDate'] > expDate
                    && acc[brand]['coffees'][coffee]['quantity'] >= qty) {
                    acc[brand]['coffees'][coffee]['quantity'] -= +qty;
                }
                return acc;
            } else if (cur === 'REPORT') {
                console.log(`>>>>> REPORT! <<<<<`);
                Object.entries(acc).forEach(([e1, e2]) => {
                    console.log(`Brand: ${e1}:`);
                    Object.entries(e2).forEach(([c1, c2]) => {
                        Object.entries(c2).forEach(([coffee1, coffee2]) => {
                            console.log(`-> ${coffee1} -> ${coffee2.expiryDate} -> ${coffee2.quantity}.`);
                        })
                    })
                })
                return acc;
            } else if (cur === 'INSPECTION') {
                console.log(`>>>>> INSPECTION! <<<<<`);
                let brands = Object.keys(acc).sort();
                brands.forEach(brand => {
                    console.log(`Brand: ${brand}:`);
                    let coffees = Object.keys(acc[brand]['coffees']).sort((a, b) => acc[brand]['coffees'][b]['quantity'] - acc[brand]['coffees'][a]['quantity']);
                    coffees.forEach(coffee => {
                        console.log(`-> ${coffee} -> ${acc[brand]['coffees'][coffee]['expiryDate']} -> ${acc[brand]['coffees'][coffee]['quantity']}.`);
                    })
                })
                return acc;
            }
        }, {});
}
warehouse([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);

/*
let map = new Map();

    for (let line of input) {
        let [command, brand, coffeeName, date, quantity] = line.split(', ');

        if (command === "IN") {
            if (!map.has(brand)) {
                map.set(brand, new Map());
            }

            if (!map.get(brand).has(coffeeName)) {
                map.get(brand).set(coffeeName, new Map());
            } else {
                map.get(brand).get(coffeeName).set(date, quantity);
            }
        }
        // } else if (command === "OUT") {

        // }
    }
*/