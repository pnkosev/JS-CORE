function solve(obj) {
    let engineTypes = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{type: 'hatchback', color: obj.color}, {type: 'coupe', color: obj.color}];
    let wheelSize = obj.wheelsize % 2 === 1 ? obj.wheelsize : obj.wheelsize - 1;

    return {
        model: obj.model,
        engine: engineTypes.filter(e => e.power >= obj.power)[0],
        carriage: carriages.filter(c => c.type === obj.carriage.toLowerCase())[0],
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

// function solve(obj) {
//     let storage = {
//         engines: {
//             small: {
//                 power: 90,
//                 volume: 1800
//             },
//             normal: {
//                 power: 120,
//                 volume: 2400
//             },
//             monster: {
//                 power: 200,
//                 volume: 3500
//             }
//         },
//         carriages: {
//             hatchback: {
//                 type: 'hatchback',
//                 color: ''
//             },
//             coupe: {
//                 type: 'coupe',
//                 color: ''
//             }
//         }
//     };
//     let newObj = {};

//     newObj.model = obj.model;

//     if (obj.power <= 90) {
//         newObj.engine = storage.engines.small;
//     } else if (obj.power <= 120) {
//         newObj.engine = storage.engines.normal;
//     } else {
//         newObj.engine = storage.engines.monster;
//     }

//     if (obj.carriage.toLowerCase() === 'hatchback') {
//         storage.carriages.hatchback.color = obj.color;
//         newObj.carriage = storage.carriages.hatchback;
//     } else if (obj.carriage.toLowerCase() === 'coupe') {
//         storage.carriages.coupe.color = obj.color;
//         newObj.carriage = storage.carriages.coupe;
//     }
//     let wheelSize = obj.wheelsize % 2 === 1 ? obj.wheelsize : obj.wheelsize - 1;
//     newObj.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

//     return newObj;
// }