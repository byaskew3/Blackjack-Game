// --------- CACHING THE DOM --------------
let messageEl = document.querySelector('.message-el');
let cardsEl = document.querySelector('.cards-el');
let sumEl = document.querySelector('.sum-el');
let playerEl = document.querySelector('.player-el');
let startBtn = document.querySelector('.start-btn');
let newCardBtn = document.querySelector('.newcard-btn');


// ---------------- GLOBAL VARIABLES -----------------
let player = {
    name: 'Christian',
    chips: 200
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;


// ------------------- EVENT LISTENERS --------------------------
newCardBtn.addEventListener('click', newCard);
startBtn.addEventListener('click', renderGame);


// ---------------- FUNCTIONS -------------------

// renderGame() function
function renderGame() {
    newPlayer();
    if (firstCard === 11 && secondCard === 11) {
        firstCard = getRandomCard()
        secondCard = getRandomCard()
    };
    startBtn.parentNode.removeChild(startBtn);
    cardsEl.textContent += ` ${firstCard} ${secondCard}`;
    sumEl.textContent += ` ${sum}`
    currentHand()
}

// currentHand() function
function currentHand() {
    if (sum === 21) {
        messageEl.textContent = 'Blackjack!!'
        newCardBtn.textContent = 'Would you like to play another round?'
        removeEvent();
        newRound();
    } else if (sum < 21){
        messageEl.textContent = 'Would you like to draw a card?'
    } else {
        messageEl.textContent = 'You lose!'
        newCardBtn.textContent = 'Would you like to play another round?'
        removeEvent();
        newRound();
    }
}

// getRandomCard() function, gets a random number between and including 1-13.
function getRandomCard() {
    let card = Math.floor ( Math.random() * 13) + 1;
    if (card > 11) {
        card = 10;
        return card;
    } else if (card === 11) {
        return card;
    } else {
        return card;
    }
}

// newCard() function, allows user to add another card to hand
function newCard() {
    let card = getRandomCard();
    cardsEl.textContent += ` ${card}`;
    sum += card;
    sumEl.textContent = `Sum: ${sum}`
    currentHand();
}

// removeEvent() function, removes event from newCardBtn.
function removeEvent() {
    newCardBtn.removeEventListener('click', newCard)
}

// newRound() function, after win/loss, allows user to play another round
function newRound() {
    newCardBtn.addEventListener('click', function() {
        location.reload();
    })
}

// newPlayer() function
function newPlayer() {
    playerEl.textContent = `${player.name}: $${player.chips}`;
}