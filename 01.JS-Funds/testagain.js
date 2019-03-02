let arr = [
    ["20", "40"],
    ["10", "60"]
];

let sumLeftRight = 0;
let sumRightLeft = 0;

arr.filter((item, index) => {
    return sumLeftRight += +item[index];
});

arr.filter((item, index) => {
    return sumRightLeft += +item[item.length - 1 - index];
});

let resultMain = arr
    .map((arr, index) => {
        return +arr
            .filter((innerItem, innerIndex) => {
                return innerIndex === index;
            })
    })
    .reduce((acc, cur) => {
        return acc + cur;
    });

let resultSecondary = arr
    .map((arr, index) => {
        return +arr
            .filter((innerItem, inndeIndex) => {
                return inndeIndex === arr.length - 1 - index;
            })
    })
    .reduce((acc, cur) => {
        return acc + cur;
    });

console.log(sumLeftRight);
console.log(sumRightLeft);

console.log(resultMain);
console.log(resultSecondary);