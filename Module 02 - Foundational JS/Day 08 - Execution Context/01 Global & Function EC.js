//This is how a JS program is executed:

//01. Global Execution Context (GEC):
    //01a. Creation Phase:
        //Even if you don't have anything written in your JS file, the environment loads certain 'files'. They are:
            //a) 'window'/'global' binding
            //b) 'this' binding
            //NOTE: In the GEC, both of these bindings point to the same object (i.e., 'global'/'window' object) that contains a lot of objects, variables, functions, etc. All these things combined form the 'environment'.
        //But IRL, we don't execute empty files. Let's say we have a JS file where we:
            //a) assign certain bindings some values.
            //b) define some functions.
            //-> In its GEC, JS would 'declare' these bindings (not 'define'), but functions will be defined properly.
                //Some Notes:
                //(i): I mean only those functions that are created with the 'function' keyword like this:
                    function fn()
                    {
                        return 0;
                    }
                //(ii): Anything written like this would be deemed a normal binding:
                    let myFn = function()
                    {
                        return 0;
                    }
                //(iii): Since I said that functions will be 'defined', please note that right now they're merely being saved in memory as normal objects. The legal validity of their actual definitions are not being considered right now. They could be full of illegal code. For Example:
                    function badFunction()
                    {
                        return aBindingThatDoesNotExist;
                    }

    //01b. Execution Phase:
        //This one is pretty simple. JS will [try to] execute all the statements. For instance:
            //a) Bindings declared will now be assigned values (if those values could indeed be calculated).
            //b) Functions will be executed* (if invoked).
            //c) values will be produced, displayed, modified, etc. (subject to nothing illogical/illegal being done).
            //CLARIFICATION on (b): The execution of a function is a whole different story in itself. It is below-mentioned.



//02. Function Execution Context (FEC):
    //02a. Creation Phase:
        //Once again, even if you don't have any code written in the function body, certain 'files' are going to be loaded:
            //a) A new 'this' binding is created, which will refer to the that object in whose context the function was invoked (or created in case of an arrow function). For example:
                //(i). If I invoke a function normally, the 'this' keyword inside the function's body will refer to the GEC. Please note that in 'strict mode' of JS, 'this' will refer to 'defined' in this case.
                //(iii). But if I call a function as a 'method' of an 'object' (explained later in this module), the 'this' keyword inside the function's body will refer to the said object.
                //(iv). As far as arrow functions are concerned, just know that the 'this' keyword in their bodies will refer to the object, which was the context in which the arrow function was 'defined'.
                    //BEHOLD: Every 'this' refers to the global object, regardless of where the function is defined/invoked:    
                    function i()
                        {
                            console.log(this);
                            function ii()
                            {
                                console.log(this);
                                function iii()
                                {
                                    console.log(this);
                                    function iv()
                                    {
                                        console.log(this);
                                    }
                                    iv();
                                }
                                iii();
                            }
                            ii();
                        }
                        i();