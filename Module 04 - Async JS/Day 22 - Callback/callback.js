//SOME NOTES:
    //01. JS, at its core, is a synchronous and a single-threaded language.
    //02. Even when we use functions such as setTimeout(), this fact stays true, because these functions merely outsource certain non-JS work [countdown] to the environment.
    //02A. The only exception to the rule I know are "Web Workers".
    //03. "setTimeout()" is pretty straightforward, but let's suppose that an argument to setTimeout [a function] that was set to be invoked after 02 seconds, is to be invoked now (timer is now off), but JS is busy with something else right now. What do we do? The waiting function would wait for the execution of the current function to finish first. Hence, a 2000ms. wait really means - "a waiting time of AT-LEAST 2000ms".
    //04. The exact rules for execution are defined by the "Event Loop":-
        //a) JS runs code in this order: synchronous code -> microtasks -> next task.
                //EXCEPTION: "process.nextTick" (in Node.js) is a special case — it runs before other microtasks.
        //b) Normal Tasks (Macro-tasks):
            //ba) the entire JS script itself (runs as one task when first loaded)
            //bb) callbacks scheduled by "setTimeout()"/"setInterval()"
            //bc) I/O operations, DOM events, etc.
        //c) Microtasks: "Promise.then", "queueMicrotask", "MutationObserver".
        //d) After each normal task, *all* queued microtasks run before the next task begins.




//01. setTimeout(): the function takes 2 simple arguments: a function definition/reference; & time in milliseconds. Runs the fn once after the timer goes off. For Example:
    setTimeout(() => {console.log('string');}, 1000);
    setTimeout(() => someFn, 1000);
    //TIP -> setTimeout() can take infinite arguments: a fn definition/reference; time; & arguments to be passed to the fn:
        setTimeout(console.log, 1000, 'str 01', 'str 02', 'str 03', 'etc.');


//02. setInterval():
    //a) ibid; but it resets the timer when it goes off. It's like an infinite loop.
        setInterval(console.log, 2000, '02 secs.');
        //NOTE: If a fn execution via setInterval() is delayed so much (due to JS being busy elsewhere) that another timer of the same went off, the fn will execute only once (the latter call to the same).


//03. Callback: a fn passed as an argument to, & called by another function is called a callback function:
    //a)
        setTimeout(fn, 1000);
    //b)
        function elections(major, minor)
        {
            try
            {
                let age = 10; //suppose we get the age from some API, instead;
                if(age < 18)
                    minor();
                else
                    major();
            }
            catch(error) //if the age could not be fetched, for instance:
            {
                console.log('the age could not be fetched');
            }
        }




//next lectures...
//04. Promises:
//05. Async/Await:




//just to avoid runtime errors...
function fn() {console.log("fn")};
function someFn() {console.log("someFn")};
function minor() {console.log('Can Vote')};
function major() {console.log('Cant Vote')};