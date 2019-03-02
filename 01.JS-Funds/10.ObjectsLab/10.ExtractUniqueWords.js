function extractUniqueWords(text) {
    let set = new Set();

    for (let line of text) {
        let words = line.toLowerCase().split(/\W+/).filter(w => w !== '');

        for (let word of words) {
            set.add(word);
        }
    }
    //console.log(Array.from(set.keys()).join(", "));
    console.log(Array.from(set.keys()).join(", "));
}
extractUniqueWords(
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.', 
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);