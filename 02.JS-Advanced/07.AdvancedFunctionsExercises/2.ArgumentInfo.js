function argumentInfo() {
    let obj = {};
    for (let i = 0; i < arguments.length; i += 1) {
        let current = arguments[i];
        let type = typeof current;
        console.log(type + ': ' + current);
        if (!obj[type]) {
            obj[type] = 1;
        } else {
            obj[type]++;
        }
    }

    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(k => console.log(`${k} = ${obj[k]}`));
    //Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(md => console.log(`${md[0]} = ${md[1]}`));
}


// function argumentInfo() {
//     let metaData = new Map();

//     for (const arg of arguments) {
//         let currentType = typeof arg;
//         console.log(`${currentType}: ${arg}`);

//         let test = metaData.get(currentType)
//         if (metaData.get(currentType)) {
//             metaData.set(currentType, metaData.get(currentType) + 1);
//         } else {
//             metaData.set(currentType, 1);
//         }
//     }

//     [...metaData]
//         .sort((a, b) => b[1] - a[1])
//         .forEach(md => {
//             console.log(`${md[0]} = ${md[1]}`);
//         });
// }
argumentInfo({ name: 'bob'}, 3.333, 9.999);