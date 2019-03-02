function carFactory(carWanted) {
    let engineTypes = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriageTypes = [{ type: 'hatchback', color: carWanted.color }, { type: 'coupe', color: carWanted.color }];
    let wheelSize = carWanted.wheelsize % 2 == 1 ? carWanted.wheelsize : carWanted.wheelsize - 1;

    return {
        model: carWanted.model,
        engine: engineTypes.filter(e => e.power >= carWanted.power)[0],
        carriage: carriageTypes.filter(c => c.type == carWanted.carriage)[0],
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    }
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }))