function solve(arr, meth) {
    let sortingMethod = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }
    return arr.sort(sortingMethod[meth]);
}

console.log(solve([3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6], 'desc'));