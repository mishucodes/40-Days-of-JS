//01. Closures: Functions that still remember/reference binding(s) from their outer scope(s) (function(s)) even after those outer scope(s) now have finished executing. For Example:
    function outerFunction()
    {
        let x = 10; //suppose we have some secret formula to calculate 'x', which we don't want the world to know...
        function innerFunction()
        {
            return x;
        }
        return innerFunction;
    }
    let closureFunction = outerFunction();
    console.log(closureFunction);
    console.log(closureFunction());


//NOTE: The inner-functions access the outer function's binding(s) via their reference. For example:
    //a) Primitive Values:
        function primitiveValueOuter()
        {
            let x = 0;
            function primitiveValueInner()
            {
                return ++x;
            }
            return primitiveValueInner;
        }
        //aa)
            let primitiveValueClosure = primitiveValueOuter();
            console.log(primitiveValueClosure()); //1
            console.log(primitiveValueClosure()); //2
            console.log(primitiveValueClosure()); //3
        //ab)
            let primitiveValueClosureAgain = primitiveValueOuter();
            console.log(primitiveValueClosureAgain()); //1
            console.log(primitiveValueClosureAgain()); //2
            console.log(primitiveValueClosureAgain()); //3

    //b) Non-Primitive Values:
        function nonPrimitiveValueOuter()
        {
            let x = [0];
            function nonPrimitiveValueInner()
            {
                return ++x[0];
            }
            return nonPrimitiveValueInner;
        }
        //ba)
            let nonPrimitiveValueClosure = nonPrimitiveValueOuter();
            console.log(nonPrimitiveValueClosure()); //1
            console.log(nonPrimitiveValueClosure()); //2
            console.log(nonPrimitiveValueClosure()); //3
        //bb)
            let nonPrimitiveValueClosureAgain = nonPrimitiveValueOuter();
            console.log(nonPrimitiveValueClosureAgain()); //1
            console.log(nonPrimitiveValueClosureAgain()); //2
            console.log(nonPrimitiveValueClosureAgain()); //3
        //EXPLANATION: The reason why we don't see "1,2,3,4,5,6" when we create different instances of inner-functions is that despite the bindings being referenced by the inner functions (NOTE: 'referenced', not 'passed'. No value is being 'passed' here. Just being 'referenced'...), the object whose reference is passed is the one that was created during the execution of a specific instance of the outer function.
        //In simpler words, each time the outer function runs, it creates a new instance of the binding along-with a new closure that references it. Hence, closures from different executions work on different values/bindings.