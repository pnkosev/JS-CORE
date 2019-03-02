function countWordsWithMaps(input) {
    let allWords = input.join().toLowerCase();
    let words = allWords.split(/\W+/g).filter(w => w !== '');

    let wordCount = new Map();

    for (let word of words) {
        if (!wordCount.has(word)) {
            wordCount.set(word, 1);
        } else {
            wordCount.set(word, wordCount.get(word) + 1);
        }
    }
    let sorted = Array.from(wordCount.keys()).sort().forEach(w => console.log(`'${w}' -> ${wordCount.get(w)} times`));
}
countWordsWithMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);