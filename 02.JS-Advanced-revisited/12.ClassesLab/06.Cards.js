let result = (function () {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            if (validFaces.includes(face)) {
                this.face = face;
            } else {
                throw new Error(`Invalid face- ${face}`);
            } if (Object.values(suits).includes(suit)) {
                this.suit = suit;
            } else {
                throw new Error(`Invalid face- ${suit}`);
            }
        }

        get face() {
            return this._face;
        }

        get suit() {
            return this._suit;
        }

        set face(val) {
            if (validFaces.includes(val)) {
                this._face = val;
            } else {
                throw new Error(`Invalid face- ${face}`);
            }
        }

        set suit(val) {
            if (Object.values(suits).includes(val)) {
                this._suit = val;
            } else {
                throw new Error(`Invalid face- ${suit}`);
            }
        }
    }

    let suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',

    }

    return {
        Suits: suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;
let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
let card2 = new Card('1', Suits.DIAMONDS);