const favNumber = 18; 
let guess = null;

while (guess !== favNumber) {
    guess = parseInt(prompt("Guess the favorite number:"));

    if (guess > favNumber) {
        console.log("Too high! Try again.");
    } else if (guess < favNumber) {
        console.log("Too low! Try again.");
    } else if (guess === favNumber) {
        console.log("Correct! You've guessed the favorite number.");
    } else {
        console.log("Please enter a valid number.");
    }
}