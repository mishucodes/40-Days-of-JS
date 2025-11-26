//01. Debouncing: Limiting the number of times a function is being invoked. We must ensure that there is a certain delay between a function being invoked again. For instance:
    //-> it's a bad idea to call an expensive function on every keystroke in an input field.
    //-> it's a bad idea to call an expensive function on a mousemove.


//Defining a debounce function:
    function debounce(fn, delay = 100)
    {
        let timer;
        return function(...args)
        {
            clearTimeout(timer);
            timer = setTimeout(() =>
                {
                    fn.apply(this, args)
                }, delay);
        }
    }

//Using the debounce function:
    function myFn() {console.log("myFn")}
    myFn = debounce(myFn, 500); //myFn is now a fn that takes care of it's delay itself