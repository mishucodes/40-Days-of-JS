//01. Recursion: A function calling itself in its own definition. For Example:
    function factorialOf(x)
    {
        if(x === 1)
            return 1;
        else
            return(x * factorialOf(x-1));
    }
    console.log(factorialOf(5));