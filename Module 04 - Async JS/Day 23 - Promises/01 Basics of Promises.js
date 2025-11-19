//01. WHAT IS A PROMISE:
    //-> Basically a placeholder for a yet unknown value. Future execution is contingent on such value.
    //-> Syntax: Takes an EXECUTOR FUNCTION as its argument. This fn runs immediately.
    //-> Also, this fn automatically receives two parameters (conventionally called: resolve and reject).
    //-> I like to read 'resolve' & 'reject' as 'return', & their arguments as the values being returned.
    //For Example:
        let problems = false;
        let p1 = new Promise((resolve, reject) =>
            {
                if(!problems)
                    resolve('Resolved'); //return 'Resolved';
                else
                    reject('Rejected'); //return 'Rejected';
            });
//SOME NOTES:
    //a) the resolve & reject are methods/functions. Not ordinary variables.
    //b) a promise can have 3 states: pending, resolved, rejected.
    //c) hence, it can have 3 values: *pending* (nothing), value, error.


//More Details about the Promise Object:-
    let p2 = new Promise((resolve, reject) => resolve('done'));
    //See what each statement prints:
        console.log(p2); //it's a promise
        console.log(p2.then); //it's a function
        console.log(p2.then()); //.then() returns a promise, too...

    //Something Interesting: promises run the executor function immediately, even if you don't use the promise object anywhere...
new Promise((resolve, reject) =>
{
    console.log("Executor running even though the function is never called...?");
    resolve(42);
});


//This keyword in Promises:
    let myPromise = new Promise((resolve, reject) => resolve(0));
    myPromise.then((val) => console.log(this)); //empty object
    myPromise.then(function(val) {console.log(this)}); //global object