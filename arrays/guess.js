let randomNumber = Math.floor(Math.random() * 5);
guesscount = 0
while (true){
    guess = parseInt(prompt('Enter the correct number '))
    guesscount++
    if (guess==randomNumber){
        console.log("Well done! You have guessed the correct number at", guesscount, 'tries')
    }
    else {
        console.log("Sorry, you have guessed the wrong number")
    }
}
