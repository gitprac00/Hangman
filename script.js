const words = ["sujal", "pralhad", "sairash"];
const randomNumber = Math.floor(Math.random() * words.length);
const randomWord = words[randomNumber];
const maxTries = 8;
let guessedWord = Array(randomWord.length).fill('_');

for (let attempts = 0; attempts < maxTries; attempts++) {
    const enteredLetter = prompt(`Enter one letter at a time:\n${guessedWord.join(' ')}`);
    if (enteredLetter === null) {
        alert("Game cancelled.");
        break;
    }
    if (enteredLetter.length !== 1) {
        alert("Please enter only one character.");
        attempts--; // Retry the same attempt
        continue;
    }

    let correctGuess = false;
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === enteredLetter && guessedWord[i] === '_') {
            guessedWord[i] = enteredLetter;
            correctGuess = true;
        }
    }

    if (correctGuess) {
        alert(`Good guess!`);
    } else {
        alert("No matching character.");
    }

    if (!guessedWord.includes('_')) {
        alert(`Congrats! You guessed it right: ${randomWord}`);
        break;
    } else {
        alert(`Your guess: ${guessedWord.join(' ')}\nAttempts left: ${maxTries - attempts - 1}`);
    }

    if (attempts === maxTries - 1) {
        alert(`Sorry, you've run out of attempts. The word was: ${randomWord}`);
    }
}
