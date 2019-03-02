function censorship(text, words) {
    for (let word of words) {
        text = text.split(word).join("-".repeat(word.length));
    }
    console.log(text);
}
censorship('roses are red, violets are blue', [', violets are', 'red']);