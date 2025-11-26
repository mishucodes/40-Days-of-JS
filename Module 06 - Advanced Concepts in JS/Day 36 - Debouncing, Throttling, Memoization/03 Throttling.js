//01. Throttling: 



//Defining a throttle function:
    function toThrottle(fn, interval = 100)
    {
        let lastTime = 0;
        return function(...args)
        {
            let now = Date.now();
            if(now - lastTime > interval)
            {
                lastTime = now;
                fn.apply(this, args);
            }
        }
    }

//Using the toThrottle function:
    function myFn() {console.log("myFn")};
    myFn = toThrottle(myFn);