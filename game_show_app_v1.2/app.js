const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;                // This initializes the missed counter to 0; This variable will be used to keep count of the number of misses

const startGame = document.querySelector('.btn__reset');
startGame.addEventListener('click', (e) => {
    const hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
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
    const matchedLetter = [];
    for ( let i = 0; i < items.length; i++ ) {
        let item = items[i].textContent
        if (item === buttonClicked) {
            items[i].classList.add('show');
            matchedLetter.push(buttonClicked);
        } 
    }
    console.log(matchedLetter);
};
