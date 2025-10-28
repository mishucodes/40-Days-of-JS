//01. IIFE: Immediately Invoked Function Expression. Basically invoking a function right after defining it. For Example:
    //EXPLANATION: We just put the fn definition inside "()" & then use this big chuck of code like a normal function:
        (function greetUser(name = 'guest')
        {
            console.log('hello,', name);
        })();


//NOTE: According to Mr. Tapas, IIFEs are used in plugin dev.