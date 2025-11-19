//01. ASYNC FUNCTIONS: they always returns a promise...
    //a) Resolved:
        async function fn1()
        {
            //Async functions do not run unless called. Better control than promises...
            //console.log("Proof that fn1 won't run unless called...");
            return "Hello World"; //returns a value wrapped in an already resolved promise...
        }
    //b) Rejected:
        async function fn2()
        {
            throw new Error("Something went wrong"); //an already rejected promise...
        }

//Notice the following:
    console.log(fn1); //an async function
    console.log(fn1()); //an already resolved promise...
    console.log(fn1().then); //a function/method
    console.log(fn1().then()); //".then()" returns a pending promise...



//02. AWAIT KEYWORD: Must be used inside an async function. However, there are some exceptions to this rule in modern JS.
    //a) Handling Resolves:
        handleFn1();
        async function handleFn1()
        {
            console.log('The Promise:', fn1());
            console.log('The Value:', await fn1());
        }
    //b) Handling Rejections:
        handleFn2();
        async function handleFn2()
        {
            try {console.log(await str3());} //won't run bcz await only handles resolved promises...
            catch(err) {console.log('Error: something went wrong');}
        }



//03. ASYNC INSIDE IIFE: used to run async code at the top level...
    (async function()
    {
        console.log('The Value from IIFE:', await fn1());
    })();