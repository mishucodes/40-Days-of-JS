//01. Callback Function: A function being passed to another as an argument. For Example:
    function executeThis(x, y)
    {
        x(y);
    }
    executeThis(console.log, 'hello world');
    executeThis(function(argument)
                {
                    console.log('this is an anonymous function');
                    console.log(argument);
                },
                'this is the second argument to executeThis();');