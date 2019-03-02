function test(input) {

    let sum1 = input.map((item, index) => {
        return item
        .map((k) => {
            return +k;
        })
        .filter((innerItem, innerIndex) => {
            return innerIndex === index;
        })[0];
    })
    .reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    let sum2 = input.map((item, index) => {
        return item
        .map((k) => {
            return +k;
        })
        .filter((innerItem, innerIndex) => {
            return innerIndex === item.length - 1 - index;
        })[0];
    })
    .reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    console.log(`${sum1}, ${sum2}`);
}
test([
    [20, 40, 60], 
    [10, 60, 110],
    [10, 20, 30]
]);