function countOccurrences(str, text) {
    let index = text.indexOf(str);
    let count = 0;

    while (index > -1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    console.log(count);
}
countOccurrences('the', 'The quick brown fox jumps over the lay dog.');