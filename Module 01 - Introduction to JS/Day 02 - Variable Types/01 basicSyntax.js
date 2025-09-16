//A 'variable'/'binding' in programming could be understood as a storage. It can store values (data).
//A more accurate analogy would be to say that a variable is like an arrow that points to a value in memory.

//This is the basic syntax to declare & define variables in JS:
//a) declaring variables:
let variableOne;
var variableThree;
//can't do it with const.

//b) declaring & defining variables:
let x = 1;
const y = 'hello';
var z = true;


//SOME NOTES:
//a) let/const/var are called 'specifiers'. They dictate the scope (where the variables are visible/accessible), & what operations are allowed on them (read/write permissions).
//b) After let/var/const, we write the name (identifier) of the variable. We can give any name. There are some rules though:
        //ba) they can use letters, digits, _ and $, but cannot start with a digit.
        //bb) they are case-sensitive.
        //bc) they cannot contain spaces or hyphens.
        //bd) they cannot be named any reserved keywords.
        //be) Unicode letters/emojis are allowed but bad style.
        //bf) In strict mode of JS, some extra keywords (implements, package, yield, etc.) are also disallowed.
//c) After the identifier, we have an assignment operator (=).
//d) Then we have the value to be assigned to the variable declared.
//e) Variables can be reassigned different values anytime. For instance:
let userAge = 21;
console.log(userAge);
userAge = 22; //can't do it with 'const' variables. they can point to only one thing all their life.
console.log(userAge);
    //SMALL NOTE ON CONST: Although a const variable is doomed to point at only one thing all its life, the thing it's pointing to itself may change. For example, imagine a const variable is pointing to a single byte in memory that is set to 00000001. Even though this const variable cannot point to any other byte, the byte itself can be set to 00000010, for example.



//Some Variable Naming Conventions:
//a) camelCase (preferred in JS)...
//b) PascalCase
//c) snake_case
//d) SCREAMING_SNAKE_CASE
//e) kebab-case (invalid in JS)...