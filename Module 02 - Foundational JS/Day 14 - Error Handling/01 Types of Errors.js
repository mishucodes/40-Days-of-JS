//01. Syntax/Parsing Error: Grammatical Errors in code. For Example:
    let 1 = ;
//02. Runtime Error: Grammatically correct, but doing something either illegal or stupid while running. For Example:
    //a) Illegal:
        console.log(aBindingThatDoesNotExist);
    //b) Stupid:
        console.log(Number('four')); //NaN


//NOTE: This lecture is not about the Syntax Errors. It's about Runtime errors, specifically related to those situations/circumstances when the program ends up doing something illegal/stupid/dangerous due to some kind of user-interaction (mistake or messing) or some kind of happenstance (bad API responses).
//Essentially, we'll try to write our programs in such a manner that we can handle these errors gracefully. For Example:
    //a) If the user inputs something bad. We kindly inform him/her about it, & guide the user.
    //b) If some API responds something bad, we either try again, or tell user about it, or let him choose, or something alike.