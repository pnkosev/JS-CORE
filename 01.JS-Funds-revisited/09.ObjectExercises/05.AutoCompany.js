// function solve(arr) {
//     let obj = arr
//         .reduce((acc, cur) => {
//             cur = cur.split(' | ');
//             let brand = cur[0];
//             let model = cur[1];
//             let qty = cur[2];

//             if (!acc[brand]) {
//                 acc[brand] = {
//                     models: {}
//                 };
//             }
//             if (!acc[brand]['models'][model]) {
//                 acc[brand]['models'][model] = +qty;
//             } else {
//                 acc[brand]['models'][model] += +qty;
//             }
//             return acc;
//         }, {});
//     Object.entries(obj).forEach(brand => {
//         console.log(brand[0]);
//         Object.entries(brand[1].models).forEach(([model, qty]) => {
//             console.log(`###${model} -> ${qty}`);
//         });
//     })
// }

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);

function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            cur = cur.split(' | ');
            let brand = cur[0];
            let model = cur[1];
            let qty = cur[2];

            if (!acc[brand]) {
                acc[brand] = {};
                acc[brand][model] = +qty;
            } else {
                if (!acc[brand][model]) {
                    acc[brand][model] = +qty;
                } else {
                    acc[brand][model] += +qty;
                }
            }
            return acc;
        }, {});
    Object.entries(obj).forEach(([brand, rest]) => {
        console.log(`${brand}`);
        Object.entries(rest).forEach(e => console.log(`###${e[0]} -> ${e[1]}`));
    });
}