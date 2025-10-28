//01. Arrow Functions: Another way to define functions in JS. They're mostly similar to normal functions, but they behave a little different in certain circumstances. For Instance:
    //a) They don't need curly braces if their code-block (definition) is a single-statement.
    //b) They don't need the 'return' keyword if the curly braces are missing from the definition.
    //c) 'this' refers to the value of 'this' when the function was being defined, not when it is declared.

    //Syntax:
    let add = (x,y) => x+y;
    console.log(add(2,2));