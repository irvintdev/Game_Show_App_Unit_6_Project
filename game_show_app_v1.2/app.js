const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;                // This initializes the missed counter to 0; This variable will be used to keep count of the number of misses
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('.btn__reset');

startGame.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

const phrases = [
    'come fly with me',
    'the way you look tonight',
    'fly me to the moon',
    'just in time',
    'one for my baby',
];

function getRandomPhraseAsArray(array) {
    // This function create an array of characters from a random quote in the phrases array
    const arrayIndexNumber = Math.floor(Math.random()*array.length);
    const randomPhrase = array[arrayIndexNumber];
    const phraseSplit = randomPhrase.split("");
    return phraseSplit;
};

// getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(array) {
    const chosenPhrase = getRandomPhraseAsArray(array);
    console.log(chosenPhrase);
    const phraseLength = chosenPhrase.length;
    console.log(phraseLength);
    const ul = document.querySelector('ul');
    for ( let i = 0; i < chosenPhrase.length; i++) {
        if ( chosenPhrase[i] === ' ') {
            let li = document.createElement('li');
            li.textContent = chosenPhrase[i];
            li.className = 'space';
            // console.log(li);
            ul.appendChild(li);
            phrase.appendChild(ul);
        } else {
            let li = document.createElement('li');
            li.textContent = chosenPhrase[i];
            li.className = 'letter';
            // console.log(li);
            ul.appendChild(li);
            phrase.appendChild(ul);
        }
    }
}

addPhraseToDisplay(phrases);

function checkLetter(buttonClicked) {
    const ul = document.querySelector('ul');
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
    const letters = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if ( letters.length === show.length) {
        overlay.className = 'win';
        overlay.style.display = 'initial';
        console.log('you won');
    } else if ( missed >= 5 ) {
        overlay.className = 'lose';
        overlay.style.display = 'initial';
        console.log('you lost');
    }
};

qwerty.addEventListener('click', (e) => {
    const scoreboard = document.querySelector('ol');
    const lostHeart = document.createElement('li');
    lostHeart.innerHTML = `<li class="tries"><img src="images/lostHeart.png" height="35px" width="30px"></li>`;
    let btn = e.target;
    if ( btn.tagName === 'BUTTON') {
        let chosenLetter = btn.textContent;
        btn.className = 'chosen';
        btn.disabled = true;
        checkLetter(chosenLetter);
        if ( checkLetter(chosenLetter) === null) {
            console.log('lose a heart');
            missed += 1;
            console.log(missed);
            scoreboard.removeChild(scoreboard.firstElementChild);
            scoreboard.appendChild(lostHeart);
        }
    }
    checkWin();

});

