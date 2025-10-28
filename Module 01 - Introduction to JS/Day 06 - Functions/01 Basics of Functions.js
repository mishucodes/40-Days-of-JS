//01. Function: It is essentially us defining new vocabulary in programming. Mathematically speaking, a function is something that maps an input to an output.


//02. Syntax in JS:
    //a) using the 'function' keyword:
        function add(x,y)
        {
            return x + y;
        }
    //b) as a value pointed at by a binding:
        let subtract = function(x,y)
        {
            return x - y;
        }
//SOME NOTES:
    //a) The diff. bw the two approaches is that you can 'call' the former type before defining it, but not the latter one.
    //b) They both take some parameters (optional), & return a value (or 'undefined' if nothing is returned manually).
    //c) We can call them, & their calls are basically 'expressions' in JS. For instance:
        console.log(add(2,2));
        console.log(subtract(10,5));


//03. Default Parameters: We can also introduce a default/fallback value for a missing argument(parameter):
        function welcomeUser(name = 'guest')
        {
            console.log('welcome,', name);
        }
        welcomeUser('john');
        welcomeUser();