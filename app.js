// --------- CACHING THE DOM --------------
let messageEl = document.querySelector('.message-el');
let cardsEl = document.querySelector('.cards-el');
let sumEl = document.querySelector('.sum-el');
let playerEl = document.querySelector('.player-el');
let startBtn = document.querySelector('.start-btn');
let newCardBtn = document.querySelector('.newcard-btn');
let playerName = document.querySelector('.player-name');
let numberChips = document.querySelector('.number-chips');

// ---------------- GLOBAL VARIABLES -----------------
let player = {
    name: '',
    chips: 0
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let isAlive = false;
let hasBlackjack = false;
newCardBtn.disabled = true;

// ------------------- EVENT LISTENERS --------------------------
startBtn.addEventListener('click', renderGame);
newCardBtn.addEventListener('click', newCard);


// ---------------- FUNCTIONS -------------------

// renderGame() function
function renderGame() {
    checkInput();
    isAlive = true;
    checkAlive();
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
    checkAlive();
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
    player.name = playerName.value;
    player.chips = numberChips.value;
    playerEl.textContent = `${player.name}: $${player.chips}`;
}

// checkAlive() function, has player started playing
function checkAlive() {
    if (isAlive) {
        newCardBtn.disabled = false;
    } else {
        newCardBtn.disabled = true;
    }
}

// checkInput() function, verifies if user has input values before starting
function checkInput() {
    if (playerName.value === '' || numberChips.value === '') {
        alert('Please enter your name and the amount of chips to start playing!')
        location.reload()
    }
}