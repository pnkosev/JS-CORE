function cappyJuice(input) {
    let juiceObj = {};
    let bottles = {};

    for (let line of input) {
        let tokens = line.split(" => ");
        let juice = tokens[0];
        let quantity = +tokens[1];

        if (!juiceObj[juice]) {
            juiceObj[juice] = 0;
        }   
        
        juiceObj[juice] += quantity;

        if (juiceObj[juice] >= 1000) {
            bottles[juice] = parseInt(juiceObj[juice] / 1000);
        }
    }

    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
cappyJuice(
    ['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);