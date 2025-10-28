let userInput = '';
//THE GAME:
function startGame(userInput)
{
    updateHealthBar('#computer .health', 100);
    updateHealthBar('#client .health', 100);
    let machineOutput = randomMove();
    let result = compareMoves(userInput, machineOutput);
    showResults(result, machineOutput, userInput);
}
//Taking the user input & starting the game:
    const gameInput = document.getElementById('game-input');
    gameInput.addEventListener('keydown', (event) =>
        {
            if (event.key === 'Enter')
            {
                event.preventDefault();
                userInput = gameInput.textContent.trim().toLowerCase();
                startGame(userInput);
            }
        });




//Defining some Helper Functions:
    //01. Generating a Random Move:
        function randomMove()
        {
            switch(Math.floor(Math.random() * 3) + 1)
            {
                case 1: return 'rock';
                case 2: return 'paper';
                case 3: return 'scissors';
            }
        }
    //02. Comparing two Moves:
    function compareMoves(userInput, machineOutput)
        {
            if(userInput === 'rock')
                switch (machineOutput)
                {
                    case 'rock': return 'tie';
                    case 'paper': return 'you lose';
                    case 'scissors': return 'you win';
                }
            if(userInput === 'paper')
                switch (machineOutput)
                {
                    case 'rock': return 'you win';
                    case 'paper': return 'tie';
                    case 'scissors': return 'you lose';
                }
            if(userInput === 'scissors')
                switch (machineOutput)
                {
                    case 'rock': return 'you lose';
                    case 'paper': return 'you win';
                    case 'scissors': return 'tie';
                }
            else
                return 'NO! Enter rock, paper, or scissors'
        }
    //03. Showing Results:
        function showResults(result, machineOutput, userInput)
        {
            const gameInput = document.getElementById('game-input');
            gameInput.textContent = result.toUpperCase();
            if(result === 'you win')
                updateHealthBar('#computer .health', 5);
            else if(result === 'you lose')
                updateHealthBar('#client .health', 5);

            const emojiMap =
            {
                rock: '🪨',
                paper: '📜',
                scissors: '✁'
            };
            document.querySelector('#playerOne .player-move').textContent = emojiMap[userInput] || '?';
            document.querySelector('#playerTwo .player-move').textContent = emojiMap[machineOutput] || '?';
        }
    //04. Updating the Health Bar Above:
        function updateHealthBar(selector, percent)
        {
            const bar = document.querySelector(selector);
            bar.style.width = percent + '%';
            bar.style.transition = 'width 0.5s ease';
        }



//Some Background Tasks:
    //a) Adding a little animation (& suspense) to load the game:
        let phase = 0;
        const startupInterval = setInterval(() =>
            {
                if (phase < 3)
                    gameInput.textContent += '.';
                else
                {
                    clearInterval(startupInterval);
                    gameInput.textContent = 'PLEASE ENTER A MOVE';
                }
                phase++;
            }, 1000);
    //b) Making some space for the user to enter their move:
        gameInput.addEventListener('focus', () =>
            {
                if (gameInput.textContent === 'PLEASE ENTER A MOVE')
                    gameInput.textContent = '';
            });
    //c) I think Player Names look better in caps-lock in this font:
        document.querySelectorAll('.player-name').forEach(nameBox =>
            {
                nameBox.addEventListener('blur', () => {nameBox.textContent = nameBox.textContent.toUpperCase();});
            });