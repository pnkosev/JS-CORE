function solve(arr) {
    const input = arr.slice(0);
    let n = input.shift();

    const firstNums = input.slice(0, n).join(' ');
    const lastNums = input.slice(input.length - n).join(' ');

    // const firstNums = input
    //     .filter((num, index) => {
    //         return index < n;
    //     });
    //     .join(' ');

    // const lastNums = input
    //     .filter((num, index) => {
    //         return index > input.length - n - 1;
    //     })
    //     .join(' ');
    
    console.log(firstNums);
    console.log(lastNums);
}

solve([3, 6, 7, 8, 9, 6, 7, 8, 7, 8]);