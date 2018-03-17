function deckOfCards(strArr) {
    function createCards(face, suit) {
        let cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cardSuit = ['S', 'H', 'D', 'C'];

        if (!cardFace.includes(face)) {
            throw new Error("Invalid card face: " + face);
        }
        if (!cardSuit.includes(suit)) {
            throw new Error("Invalid card suit: " + suit);
        }

        let card = {
            face: face,
            suit: suit,
            toString: () => {
                let suitToChar = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663",
                };
                return card.face + suitToChar[card.suit];
            }
        };
        return card;
    }

    let result = [];
    for (let card of strArr) {
        let suit = card.substring(card.length - 1);
        let face = card.substr(0, card.length - 1);
        try {
            result.push(createCards(face, suit));
        } catch (error) {
            console.log("Invalid card: " + card);
            return;
        }
    }
    console.log(result.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);

