//NOTE: Whenever an error is encountered (thrown) in JS code, the entire code is gone to dogs. For Example:
    // console.log(0);
    // console.log(1);
    // console.log(aBindingThatDoesNotExist);
    // //All this valid code below will not be executed because the statement above "threw an error".
    // console.log(2);
    // console.log(3);
//This is why we'll try to 'catch' these 'errors' that 'thrown' by the program. This will help our program in many ways. For starters, one bad statement will not be able to cause the whole program to be thrown to dogs (no pun intended).

//Let's do that again:
    console.log(0);
    console.log(1);
    try
    {
        console.log(aBindingThatDoesNotExist);
    }
    catch(error)
    {
        console.log(error.name + ':', error.message);
    }
    console.log(2);
    console.log(3);
    //NOTE: Now, we knew that one particular line in our code is risky. So we put that line in a "try-catch" block. This helped us 'catch' that error, & handle the situation rather gracefully (arguably).