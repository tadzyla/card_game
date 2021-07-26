import Deck from './deck.js';

const computerCardSlot = document.querySelector('.computer-card-slot')

let playerDeck, computerDeck

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()
    const deckMidPoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidPoint))
    computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards))
    
    cleanBeforeRound()
}


function cleanBeforeRound() {
    
}
//computerCardSlot.appendChild(deck.cards[0].getHTML())