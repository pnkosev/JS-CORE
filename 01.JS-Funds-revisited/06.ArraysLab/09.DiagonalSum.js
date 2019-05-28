let input = [
    ["20", "40", "60"],
    ["30", "60", "90"],
    ["10", "60", "10"]
];

let both = input
    .reduce((acc, cur, index) => {
        acc[0] = acc[0] || 0;
        acc[1] = acc[1] || 0;
        acc[0] += (+cur[index]);
        acc[1] += (+cur[input.length - index - 1]);
        return acc;
    }, []);

let main = input
    .reduce((acc, cur, index) => {
        return acc + +cur[index];
    }, 0);

let secondary = input
    .reduce((acc, cur, index) => {
        return acc + +cur[input.length - index - 1];
    }, 0);

console.log(main);
console.log(secondary);
console.log(both);

// let main = input
//     .map((a, index) => {
//         return +a[index];
//     })
//     .reduce((acc, cur) => {
//         return acc + cur;
//     }, 0);

// let secondary = input
//     .map((a, index) => {
//         return +a[input.length - index - 1];
//     })
//     .reduce((acc, cur) => {
//         return acc + cur;
//     });
// let sum = 0;
// input
//     .forEach((item, index) => {
//         sum += +item
//             .filter((innerItem, innerIndex) => {
//                 return innerIndex === index;
//             })[0];
//     });

// console.log(sum);
// console.log(main);
// console.log(secondary);