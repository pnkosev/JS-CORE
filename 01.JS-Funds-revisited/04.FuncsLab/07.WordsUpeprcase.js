function solve(str) {
    str = str.toUpperCase();
    let splitString = (str) => str.split(/\W+/).filter(w => w != '');
    // function split(str) { return str.split(/\W+/).filter(w => w != ''); }
    let words = split(str);
    return words.join(', ')
}

console.log(solve('Hi, how are you?'));