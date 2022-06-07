const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
const scoreboard = document.querySelector('ol');

// Initialize misses to 0
let missed = 0;   

// Array of phrase --- Frank Sinatra Songs :)
const phrases = [
    'come fly with me',
    'the way you look tonight',
    'fly me to the moon',
    'you make me feel so young',
    'one for my baby',
];

function getRandomPhraseAsArray(array) {
    // This function creates an array of characters from a random quote in the phrases array
    // Called in the addPhraseToDisplay function
    const arrayIndexNumber = Math.floor(Math.random()*array.length);
    const randomPhrase = array[arrayIndexNumber];
    const phraseSplit = randomPhrase.split("");
    return phraseSplit;
};




function addPhraseToDisplay(array) {
    // This function adds phrase to the display
    // Called when user starts the game
    // Also called in the restart game function
    const chosenPhrase = getRandomPhraseAsArray(array);
    const phraseLength = chosenPhrase.length;
    for ( let i = 0; i < chosenPhrase.length; i++) {
        let li = document.createElement('li');
        li.textContent = chosenPhrase[i];
        if ( chosenPhrase[i] === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        ul.appendChild(li);
    }
}


function checkLetter(buttonClicked) {
    // This function checks the if the clicked button/letter matches any of the letters in the chosen phrase.
    // Called when the user clicks one of the buttons
    let items = ul.querySelectorAll('.letter');
    let matchedLetter = null;
    for ( let i = 0; i < items.length; i++ ) {
        let item = items[i].textContent
        if (item === buttonClicked) {
            items[i].classList.add('show');
            matchedLetter = item;
        }
    }
    return matchedLetter
};



function checkWin() {
    // This functions checks if the user has won or lost the game. If so the function displays the appropriate overlay.
    // Called after each time a user has clicked a button
    const letters = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if ( letters.length === show.length) {
        winOrLoseOverlay('win','Nice Work!');
    } else if ( missed === 5 ) {
        winOrLoseOverlay('lose','Oops. Better luck next time.');
    }
};

function winOrLoseOverlay(newClassName, comment) {
    // This function sets the win or lose overlay
    // Called in the checkWin function
    const h2 = document.querySelector('.title');
    overlay.classList.add(newClassName);
    overlay.style.display = 'flex';
    h2.textContent = comment;
    startGame.textContent = 'Play Again'
    restartGame();
};

function restartGame() {
    // This function resets and restarts the game after the user has won or lost
    // Called in the winOrLoseOverlay function
    startGame.addEventListener('click', (e) => {
        const chosenBtns = document.getElementsByTagName('BUTTON');
        for ( let i = 0; i < chosenBtns.length; i++ ) {
            chosenBtns[i].classList.remove('chosen');
            chosenBtns[i].disabled = false;
        }
        ul.innerHTML = '';
        scoreboard.innerHTML = `
            <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
            <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
            <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
            <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
            <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
        `;
        missed = 0;
        addPhraseToDisplay(phrases);
        overlay.className = 'start';
    });
};

startGame.addEventListener('click', (e) => {
    // This starts the game
    overlay.style.display = 'none';
    addPhraseToDisplay(phrases);
});

qwerty.addEventListener('click', (e) => {
    // This listens to whenever a button is clicked
    // Buttons are higlighted and disabled when they are clicked
    // Misses are counted and hearts are taken away
    // Each time a button is clicked checkWin function is run to see if the user has won the game
    const lostHeart = document.createElement('li');
    lostHeart.innerHTML = `<li class="tries"><img src="images/lostHeart.png" height="35px" width="30px"></li>`;
    let btn = e.target;
    if ( btn.tagName === 'BUTTON') {
        let chosenLetter = btn.textContent;
        btn.className = 'chosen';
        btn.disabled = true;
        checkLetter(chosenLetter);
        if ( checkLetter(chosenLetter) === null) {
            missed += 1;
            scoreboard.removeChild(scoreboard.firstElementChild);
            scoreboard.appendChild(lostHeart);
        }
    }
    checkWin();

});


