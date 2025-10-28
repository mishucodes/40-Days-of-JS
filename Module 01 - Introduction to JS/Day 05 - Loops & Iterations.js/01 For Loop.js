//This is one of the most important loop styles in programming. Syntax:
    //for(a statement to be executed only once; a boolean test; a statement to be executed after each iteration)
    //{
            //code to be executed if the boolean test is positive...
    //}

//Some Examples:
    //a) counting to 5:
        for(let i = 0; i < 5; i++)
            console.log(i+1);
    //b) counting attempts: paste this code in some browser console:
        let i = 0, username, guessedNumber;
        for(username = 'john'; guessedNumber != 5; i++) //note that each statement refers to a different variable...
            guessedNumber = prompt('Guess the Number: ');
        console.log(username + ' guessed it in ' + i + ' attempts.');


//An Example of a Nested Loop:
    //a) Printing a multidimensional array:
        let multidimensionalArray =
        [
            [1.1, 1.2, 1.3, 1.4, 1.5, 1.6],
            [2.1, 2.2, 2.3, 2.4],
            [3.1, 3.2, 3.3],
            [4.1, 4.2, 4.3, 4.4],
            [5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9],
            [6.0, 6.1]
        ];
        for(let row = 0; row < multidimensionalArray.length; row++)
            for(let column = 0; column < multidimensionalArray[row].length; column++)
                console.log(multidimensionalArray[row][column]);