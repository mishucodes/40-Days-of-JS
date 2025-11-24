//01. Named Imports & Exports: You can't change the names of the imported functions/bindings.
    import {add, subtract} from './01 calculator.js';
    //Some Notes:
        //a) We must add ".js" at the end of the file name in "plain JS".
        //b) No need to do ibid in "frameworks" such as React, etc.
        //c) The {} syntax basically is a way to 'destructure' the imported object.
    //Using them:
        console.log('2 + 3 =',add(2,3));
        console.log('2 - 1 =',subtract(2,1));

//02. Importing the whole object: I'm not destructuring here. I'm just importing the object as-it-is, & giving it a name:
    import * as salutations from './02 greet.js';
        salutations.welcome('John');
        salutations.remove('Doe');


//03. Default Imports & Exports:
    // import {default as mitushiName} from "./03 userInfo.js";
                    //OR
    import mitushiName from "./03 userInfo.js";
    console.log("Mitushi's name is:", mitushiName()); //it's an old joke...


//04. Dynamic Imports: Importing something(s) conditionally during runtime.
    let userLikesHarryPotter = true;
    let userLikesAllBooks = true;
    let harryPotterPromise = import("./04a dynamicImports 01.js"); //returns a promise...
    let dunePromise = import("./04b dynamicImports 02.js");

    //a) using await:
        if (userLikesHarryPotter)
            {
                let harryPotterWrapper = await harryPotterPromise; //won't work outside the 'if' block...
                console.log(harryPotterWrapper.harryPotter(1));
            }
    //b) using .then() & importing multiple modules at once:
        if(userLikesAllBooks)
        {
            Promise.all([harryPotterPromise, dunePromise])
            .then((result) =>
                {
                    console.log(result[0].harryPotter(1));
                    console.log(result[1].dune(1))
                })
            .catch((error) => console.log(error.message));
        }
        else if(userLikesHarryPotter)
            harryPotterPromise.then((result) => console.log(result.harryPotter(2))).catch((e) => console.error(e.message));


//05. Tree Shaking:
    // -> We might import * as abc from 'xyz', but not use all the functions. This could add a lot of extra weight on the memory.
    // -> "Tree-Shaking" is when we prune the JS file of unused code.