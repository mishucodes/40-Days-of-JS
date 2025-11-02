//01. Scope: The area of program in which a particular binding is accessible refers to the scope of that binding.
//There are 04 kinds of scopes in JS:
    //a) Global: A binding that is available globally. Any binding not inside some function/block is global.*
    //b) Function: A binding that is available only within a function. Any binding declared inside a function, but not inside some block/nested function in that function. NOTE: 'var' bindings are either function/global scope. Nothing else.
    //c) Block: A binding that is available only inside a block of code. A block is just some code inside a pair of curly braces.
    //d) Module: A binding that is available only inside a particular module/set of modules.
        //NOTE: We can "look out", but "look in", meaning that if we're inside a function/block, we may be able to access a binding from the global/any other outer scope; but if we're in global/some other outer scope, we shall not be allowed to peek into some function to access its binding. For instance:
            let x = 0;
            let y = 1;
            function fn()
            {
                let x = 2;
                let z = 3;
                console.log(x); //2 (function's 'x' eclipsed global 'x')
                console.log(y); //1 (function scope can look outside)
            }
            console.log(x); //0 (global scope can't peek inside a function's scope)
            console.log(z); //reference error (ibid)

//NOTE: We're skipping module scope in this module. Also, anywhere supra we find '*', it means there's some caveat that has to do with modules.