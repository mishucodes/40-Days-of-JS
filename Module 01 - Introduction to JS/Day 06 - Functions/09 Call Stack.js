//01. Call Stack: A stack (Last-In-First-Out structure) used by JS engine to keep track of which function is currently being executed.
    //Process:
        //a) When a function is called, it’s pushed onto the call stack.
        //b) JS executes the top function (the one most recently pushed).
        //c) When that function returns, it’s popped off the stack.
        //d) Execution then resumes from the next function below it.
    
    //Some Notes:
        //a) Only one stack exists in JS, since it is single-threaded.
        //b) If functions keep getting added to the stack -> Stack Overflow Error. The stack is not infinite.
        //c) Asynchronous tasks don’t block the stack; they’re handled by the browser’s APIs and later return via the event loop.