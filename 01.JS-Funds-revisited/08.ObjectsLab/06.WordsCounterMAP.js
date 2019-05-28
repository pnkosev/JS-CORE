function solve(arr) {
    let arrCopy = arr.slice(0).join().split(/\W+/).filter(w => w !== '');
    let map = new Map();

    for (let word of arrCopy) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map.keys()).sort().forEach(w => console.log(`${w} -> ${map.get(w)} times`));
}

solve(['Far too slow, you\'re far too slow.']);