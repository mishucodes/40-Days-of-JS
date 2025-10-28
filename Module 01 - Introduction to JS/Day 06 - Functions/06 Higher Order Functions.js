//01. Higher Order Function: Functions that take function values as arguments or return them as values. For Example:

    //a) A function that take a fn as argument:
        function executeThis(fn, ...args)
        {
            fn(...args);
        }
        executeThis(console.log, 'hello');

    //b) A function that returns a function:
        const anObjectFullOfFunctions =
        {
            print: console.log,
            generateRandomNumber: Math.random,
            waitForSomeTime: setTimeout
        }
        function findMeThisFunction(fnName)
        {
            return anObjectFullOfFunctions[fnName]
        }
        let printFunction = findMeThisFunction('print');
        printFunction('hello world');

//NOTE: According to Mr. Tapas, HOFs are useful in creating wrappers.