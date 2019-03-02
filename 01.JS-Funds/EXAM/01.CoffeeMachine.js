function coffeeMachine(input) {
    let totalMoney = 0;

    for (let line of input) {
        let price = 0;
        let tokens = line.split(`, `);
        let moneyInserted = +tokens[0];
        let drink = tokens[1];

        if (drink === 'coffee') {

            let caff = tokens[2];

            if (caff === 'caffeine') {
                price += 0.8;
            } else if (caff === 'decaf') {
                price += 0.9;
            }

            if (tokens[3] === 'milk') {
                let milk = 0.1;
                price += milk;

                let sugar = +tokens[4];
                if (sugar !== 0) {
                    price += 0.1;
                }
            } else {
                let sugar = +tokens[3];
                if (sugar !== 0) {
                    price += 0.1;
                }
            }

            if (moneyInserted >= price) {
                totalMoney += price;
                let change = moneyInserted - price;
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            } else {
                let moneyNeeded = price - moneyInserted;
                console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
            }
        } else if (drink === 'tea') {

            price += 0.8;

            if (tokens[2] === 'milk') {
                price += 0.1;
                let sugar = +tokens[3];
                if (sugar !== 0) {
                    price += 0.1;
                }
            } else {
                let sugar = +tokens[2];
                if (sugar !== 0) {
                    price += 0.1;
                }
            }

            if (moneyInserted >= price) {
                totalMoney += price;
                let change = moneyInserted - price;
                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            } else {
                let moneyNeeded = price - moneyInserted;
                console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
            }
        }
    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);

}
coffeeMachine([
    '1.00, coffee, caffeine, milk, 4', 
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
]);