function solve(arr) {
    let result = [];
    let obj = arr
        .reduce((acc, cur) => {
            cur = cur.split(' => ');
            let fruit = cur[0];
            let quantity = cur[1];
            if (!acc[fruit]) {
                acc[fruit] = +quantity;
            } else {
                acc[fruit] += +quantity;
            }
            if (acc[fruit] >= 1000) {
                let juice = {
                    fruit,
                    quantity,
                }
                result.push(juice);
            }
            return acc;
        }, {});

    let a = result
        .reduce((acc, cur) => {
            let fruit = cur.fruit;
            let quantity = cur.quantity;
            if (!acc[fruit]) {
                acc[fruit] = +quantity;
            } else {
                acc[fruit] += +quantity;
            }
            return acc;
        }, {});

    // console.log(a);
    Object.keys(a).forEach(juice => {
        console.log(`${juice} => ${Math.floor(a[juice] / 1000)}`)
    });
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);