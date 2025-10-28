//01. Pseudocode for the Secret Number Game:
    //a) generate a random secret number (0-9).
    //b) take the user number.
    //c) compare both numbers.
    //d) if correct, tell him how many chances did the user needed for this.
    //e) Ask user to play again/quit.


(function startGame()
{
    let secretNumber = Math.floor(Math.random() * 10);
    for(let count = 1; count < 10 ; count++)
    {
        let playerInput = prompt('guess the secret number:');
        if (playerInput == secretNumber)
        {
            console.log(`you did it in ${count} tries!`);
            break;
        }
        else if(playerInput < secretNumber)
            console.log('too small. think bigger!');
        else
            console.log('too big. think small!');
    }
})();