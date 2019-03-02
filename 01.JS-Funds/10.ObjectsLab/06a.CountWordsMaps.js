function countWMaps(arr) {
    arr = arr.join().toLowerCase();
    let words = arr.match(/\w+/g);

    let map = new Map();

    words
        .forEach((word) => {
            if (!map.has(word)) {
                map.set(word, 1);
            } else {
                map.set(word, map.get(word) + 1);
            }
        })

    let sorted = Array.from(map.keys())
        .sort()
        .forEach((word) => {
            console.log(`'${word}' -> ${map.get(word)} times`);
        });
}
countWMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);