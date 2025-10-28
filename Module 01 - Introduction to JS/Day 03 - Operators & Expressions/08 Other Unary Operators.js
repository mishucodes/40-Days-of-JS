//01. typeof:
    console.log(typeof 5); //number
    console.log(typeof NaN); //number
    console.log(typeof 'hello'); //string
    console.log(typeof false); //boolean
    console.log(typeof [1,2,3]); //object
    console.log(typeof {name: 'john'}); //object
    console.log(typeof undefined); //undefined
    console.log(typeof null); //object


//02. instanceof:
    console.log({name: 'john'} instanceof Object); //true