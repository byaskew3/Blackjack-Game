// --------- CACHING THE DOM --------------
let messageEl = document.querySelector('.message-el');
let cardsEl = document.querySelector('.cards-el');
let sumEl = document.querySelector('.sum-el');
let playerEl = document.querySelector('.player-el');

// ---------------- GLOBAL VARIABLES -----------------
let player = {
    name: 'Christian',
    chips: 200
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let isAlive = false;
let hasBlackjack = false;

// ---------- FUNCTIONS -------------------

// renderGame() function
function renderGame() {
    isAlive = true;
    cardsEl.textContent += ` ${firstCard} ${secondCard}`;
    sumEl.textContent += ` ${sum}`
    if (sum === 21) {
        messageEl.textContent = 'Blackjack!!'
    } else if (sum < 21){
        messageEl.textContent = 'Would you like to draw a card?'
    }
}

// getRandomCard() function, gets a random number between and including 1-13.
function getRandomCard() {
    let card = Math.floor ( Math.random() * 13) + 1;
    if (card > 10) {
        return 10;
    } else {
        return card;
    }
}