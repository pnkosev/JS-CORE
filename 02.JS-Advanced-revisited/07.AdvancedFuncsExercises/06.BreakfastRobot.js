let solve = (function () {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    function restock(ingredient, quantity) {
        stock[ingredient] += +quantity;
        return 'Success';
    }

    function prepare(product, quantity) {
        let hasEnoughIngredients = true;
        let msg = '';

        Object.keys(products[product]).forEach(ing => {
            let askedQty = products[product][ing] * +quantity;
            if (stock[ing] < askedQty) {
                hasEnoughIngredients = false;
                if (!msg) {
                    msg = `Error: not enough ${ing} in stock`;
                }
                return;
            }
        });

        if (hasEnoughIngredients) {
            Object.keys(products[product]).forEach(ing => {
                let askedQty = products[product][ing] * +quantity;
                stock[ing] -= askedQty;
            });
            return 'Success';
        } else {
            return msg;
        }
    }

    function report() {
        let report = '';
        Object.keys(stock).forEach(prop => {
            report += `${prop}=${stock[prop]} `;
        });
        return report.trim();
    }

    return (input) => {
        let line = input.split(' ');
        let command = line[0];
        if (command === 'report') {
            return report();
        } else {
            if (command === 'restock') {
                let ingredient = line[1];
                let quantity = line[2];
                return restock(ingredient, quantity);
            } else if (command === 'prepare') {
                let product = line[1];
                let quantity = line[2];
                return prepare(product, quantity);
            }
        }
    }
}());

console.log(solve('restock flavour 50'));
console.log(solve('prepare coke 4'));