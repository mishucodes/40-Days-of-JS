//01. Dividing Responsibly:
    function divide(x,y)
    {
        try
        {
            if(y === 0)
                throw new Error('Division by zero is not allowed');
            //else:
            return x/y;
        }
        catch(error)
        {
            console.log(error.message); //NOTE: We could also prompt the user for a better input...
            console.log("let's try again with 2");
            return divide(x,2);
        }
    }
    console.log(divide(1,2));
    console.log(divide(1,0));