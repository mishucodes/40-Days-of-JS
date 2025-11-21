//We know for a fact that JS is a synchronous language by nature.
//However, we may mimic asynchronicity by outsourcing certain work to the environment. For instance:
    //a) Web/Browser APIs - setTimeout, setInterval, etc.
    //b) Promises
    //c) Event Handlers

//The following is what will be discussed in this lecture:
    //a) Call Stack: Manages the execution of the program. More details in previous lectures.
    //b) Web APIs: Functions like setTimeout, etc.
    //c) Callback/Task Queue: A temporary storage for Callback functions.
    //d) Microtask/Job Queue: A temporary storage for Promise handler functions.
    //e) Event Loop: The manager who decides what to run next in the call-stack.


//Some Important Notes on these:
    //a) Call Stack is LIFO.
    //a) Callback Queue is FIFO.

//The basic priority to be kept in mind:
    //a) call stack
    //b) job queue (Promises)
    //c) callback queue (WEB APIs)