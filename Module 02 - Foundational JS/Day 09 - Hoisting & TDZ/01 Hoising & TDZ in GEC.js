//Take a look at this:
console.log(firstName); //'undefined', not "reference error", because of 'var'...
console.log(lastName); //"reference error", because of 'let'...
console.log(fullName); //"reference error", because of 'const'...
var firstName = 'john';
let lastName = 'doe';
const fullName = firstName + lastName;


//EXPLANATION:
    //a) 'var' would be 'declared' but not defined the creation phase of the GEC (as one might expect).
    //b) 'let' & 'const' do that too, but ECMA decided to put the bindings declared with such keywords into something called the "Temporal Dead Zone" (TDZ).
    //NOTE: TDZ is an 'area' in JS where those bindings exist that cannot be accessed unless they're at-least declared at the time of the execution of code (something like C).