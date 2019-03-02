function sortArray(arr, command) {
    let ascendingComparator = (a, b) => a - b;
    let descendingComparator = (a, b) => b - a;

    let sortingStrategies = {
        asc: ascendingComparator,
        desc: descendingComparator
    };

    return arr.sort(sortingStrategies[command]);
}
sortArray([14, 7, 17, 6, 8], 'asc');

// let sort = (arr, sortMethod) => arr.sort((a, b) => sortMethod === 'asc' ?
//     a - b :
//     b - a);
// console.log(sort([14, 7, 17, 6, 8], 'asc'));