/*
 * Create a list that holds all of your cards
 */

// Cards
const cards = document.querySelectorAll('.card');

let cardFlipped = false;
let firstCard, secondCard;
let matchedCards = [];

// Timer
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;

const timer = document.querySelector(".timer");
const hourTimer = document.querySelector(".hour");
const minuteTimer = document.querySelector(".minute");
const secondsTimer = document.querySelector(".seconds");

let timeCounter;
let timerOn = false;


shuffle(cards);

// Timer functions

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    // h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
};

function startTimer() {
    t = setInterval(add, 1000);
};


// Card flipping functionality

function flipCard() {
    this.classList.add('open', 'show');

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        // start timer
        if (timerOn === false) {
            startTimer();
            timerOn = true;
        }
    } else {
        cardFlipped = false;
        secondCard = this;
        
        // Remove event listeners if cards match
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            matchedCards.push(firstCard);
            matchedCards.push(secondCard);
        } else {
            // hide cards if they don't match
            setTimeout( function() {
                firstCard.classList.remove('open', 'show');
                secondCard.classList.remove('open', 'show');
            }, 1000);
        }

    }
};

// adding an Event Listener to each card

cards.forEach(function(card) {
    card.addEventListener('click', flipCard);
});


// Win game

function gameWon() {
    if (matchedCards.length === 16) {

    }
};




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
