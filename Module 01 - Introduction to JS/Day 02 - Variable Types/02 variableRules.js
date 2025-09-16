//Here are some rules for different variable types:

//01. var:
    //a) function/global-scoped.
    //b) can be redeclared.
    //c) can be reassigned.
//02. let:
    //a) block/global-scoped.
    //b) can't be redeclared.
    //c) can be reassigned.
//03. const:
    //a) block/global-scoped.
    //b) can't be redeclared.
    //c) can't be reassigned.


//01)
var x = 1;
console.log(x);
var x = 2;
console.log(x);
//02)
let y = 1;
console.log(y);
y = 2; //can't do "let y" again...
console.log(y);
//03)
const z = 1; //that's it. can't reassign now.
console.log(z);