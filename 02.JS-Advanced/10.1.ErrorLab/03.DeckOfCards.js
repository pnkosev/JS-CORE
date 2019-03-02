function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        const validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuit = ['S', 'H', 'D', 'C'];
    
        if (!validFace.includes(face)) {
            throw new Error('Invalid card face: ' + face);
        }
        if (!validSuit.includes(suit)) {
            throw new Error('Invalid card suit: ' + suit);
        }
    
        let card = {
            face,
            suit,
            toString() {
                let suitToChar = {
                    'S': "\u2660", // ♠
                    'H': "\u2665", // ♥
                    'D': "\u2666", // ♦
                    'C': "\u2663", // ♣
                };
                return card.face + suitToChar[card.suit];
            }
        };
        return card;
    }
    let deck = [];
    for (let card of cards) {
        let face = card.substr(0, card.length - 1);
        let suit = card.substr(card.length - 1, 1);
        try {
            deck.push(makeCard(face, suit));
        } catch (err) {
            console.log('Invalid card: ' + card);
            return;
        }
    }
    console.log(deck.join(' '));
}
// printDeckOfCards(['AS', '10D', 'KH', '2C']);