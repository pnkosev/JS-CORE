function capitalizeWords(text) {
    let words = text.toLowerCase().split(' ').map(w => w[0].toUpperCase() + w.substring(1));
    
    console.log(words.join(' '));
}
capitalizeWords('Capitalize these words');