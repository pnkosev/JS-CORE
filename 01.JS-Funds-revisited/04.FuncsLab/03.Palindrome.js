function solve(str) {
    return str === str.split('').reverse().join('');

    // for (let i = 0; i < str.length / 2; i++) {
    //     if (str[i] !== str[str.length - i - 1]) {
    //         return false;
    //     }
    // }
    // return true;
}

console.log(solve('haha'));