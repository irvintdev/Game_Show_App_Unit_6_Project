const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;                // This initializes the missed counter to 0; This variable will be used to keep count of the number of misses

const startGame = document.querySelector('.btn__reset');
startGame.addEventListener('click', (e) => {
    const hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
});

const phrases = [
    'It is kind of fun to do the impossible',
    'It is during our darkest moments that we must focus to see the light',
    'The journey of a thousand miles begins with one step',
    'Twenty years from now you will be more dissapointed by the things that you did not do than the ones you did do',
    'Do not be afraid to give up the good to go for the great',
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
    for ( let i = 0; i < chosenPhrase.length; i++) {
        if ( chosenPhrase[i] === ' ') {
            let li = document.createElement('li');
            li.textContent = chosenPhrase[i];
            li.className = 'space';
            console.log(li)
            phrase.appendChild(li);
        } else {
            let li = document.createElement('li');
            li.textContent = chosenPhrase[i];
            li.className = 'letter';
            console.log(li)
            phrase.appendChild(li);
        }
    }
}

addPhraseToDisplay(phrases);

