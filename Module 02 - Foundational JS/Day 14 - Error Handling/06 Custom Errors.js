//We can create our own categories or errors. For Example:
    class BadInput extends Error
        {
            constructor(message)
            {
                super(message);
                this.name = "BadInput";
            }
        };

    function divide(x,y)
    {
        if(y === 0)
            throw new BadInput('divisor cannot be zero');
        //else:
        return x/y;
    }

    try
    {
        console.log(divide(1,0));
    }
    catch(error)
    {
        console.log(error.name + ":", error.message);
    }