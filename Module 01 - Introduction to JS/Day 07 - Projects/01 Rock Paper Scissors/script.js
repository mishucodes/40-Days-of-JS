//01. Pseudocode for the Stone-Paper-Scissors Game:
    //a) take the user input.
    //b) generate a random computer move.
    //c) compare both moves.
    //d) announce the winner.
    //e) Ask user to play again/quit.


for(;;)
{
    let playerInput = prompt('r: rock, p: paper, s: scissors, q: quit game');
    if(playerInput.toLowerCase() === 'q')
        break;
    //else:
        playGame(playerInput);
}

function playGame(playerInput)
{
    let messageForTie = 'match tied', messageForWin = 'you won', messageForLose = 'computer won';
    let machineMove = Math.floor((Math.random() * 3) + 1);
    switch(machineMove)
    {
        case 1: //rock
            switch(playerInput)
            {
                case 'r': informUser(messageForTie); break;
                case 'p': informUser(messageForWin); break;
                case 's': informUser(messageForLose); break;
            }
            break;
        case 2: //paper
            switch(playerInput)
            {
                case 'r': informUser(messageForLose); break;
                case 'p': informUser(messageForTie); break;
                case 's': informUser(messageForWin); break;
            }
            break;
        case 1: //scissors
            switch(playerInput)
            {
                case 'r': informUser(messageForWin); break;
                case 'p': informUser(messageForLose); break;
                case 's': informUser(messageForTie); break;
            }
            break;
    }
    //inner function:
    function informUser(result)
    {
        console.log(result);
    }
}