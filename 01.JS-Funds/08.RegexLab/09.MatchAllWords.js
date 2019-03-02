function matchAllWords(input) {
    let words = /\W+/g;

    let result = input.split(words).filter(w => w!="").join('|');

    console.log(result);
}
matchAllWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !');