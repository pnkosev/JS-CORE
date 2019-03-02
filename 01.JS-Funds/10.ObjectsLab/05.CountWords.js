function countWords(input) {
    let text = input.join();
    let words = text.split(/\W+/).filter(w => w != '');

    //let words = input[0].match(/\w+/g);

    let wordObj = {};

    for (let word of words) {
        if (!wordObj[word]) {
            wordObj[word] = 1;
        } else {
            wordObj[word]++;
        }
    }

    // for (let w of words) {
    //     wordObj[w] ? wordObj[w]++ : wordObj[w] = 1;
    // }

    console.log(JSON.stringify(wordObj));
}
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);