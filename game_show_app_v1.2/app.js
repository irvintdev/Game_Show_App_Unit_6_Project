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
    'The journey of a thousand miles begin with one step',
    'Twent years from now you will be more dissapointed ny the things that you did not do than the ones you did do',
    'Do not be afraid to give up the good to go for the great',
];

function getRandomPhraseAsArray(array) {
    // This function create an array of characters from a random quote in the phrases array
    const arrayIndexNumber = Math.floor(Math.random()*array.length);
    const randomPhrase = array[arrayIndexNumber];
    return randomPhrase;
};
