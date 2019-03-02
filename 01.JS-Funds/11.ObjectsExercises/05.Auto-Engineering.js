function autoEngineering(input) {
    let carData = {};

    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');

        if (!carData[brand]) {
            carData[brand] = {
                models: {}
            };
        }
        if (!carData[brand]["models"][model]) {
            carData[brand]["models"][model] = +quantity;
        } else {

            carData[brand]["models"][model] += +quantity;
        }
    }

    //console.log(Object.values(carData["models"]));

    let brandResult = Object.entries(carData);

    for (let car of brandResult) {
        console.log(car[0]);

        let modelResult = Object.entries(car[1].models);

        for (let [model, quantity] of modelResult) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
autoEngineering([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
    'Audi | Q7 | 1000',
]);