function countW(arr) {
    let words = arr.join().split(/\W+/g).filter(w => w != "");

    let result = words
        .reduce((obj, word) => {
            if (!obj.hasOwnProperty(word)) {
                obj[word] = 1;
            } else {
                obj[word]++;
            }
            return obj;
        }, {});
    console.log(JSON.stringify(result));
}
countW(['Far too slow, you\'re far too slow.']);