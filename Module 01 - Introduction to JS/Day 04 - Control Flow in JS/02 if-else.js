let votingAge = 18, electionAge = 25, ministerAge = 35;
let john = 10, harry = 20, bob = 30, donald = 40;


//01. if:
    if(john < votingAge)
        console.log('john is not eligible for voting');
    if(harry >= votingAge)
        console.log('harry is eligible for voting');

//02. if-else:
    //a) john:
        if(john >= ministerAge)
            console.log('john is eligible for being a minister');
        else if(john >= electionAge)
            console.log('john is eligible to contest an election');
        else if(john >= votingAge)
            console.log('john is eligible to vote in an election');
        else
            console.log('john is eligible for school');
    //b) harry:
        if(harry >= ministerAge)
            console.log('harry is eligible for being a minister');
        else if(harry >= electionAge)
            console.log('harry is eligible to contest an election');
        else if(harry >= votingAge)
            console.log('harry is eligible to vote in an election');
        else
            console.log('harry is eligible for school');


//03. Using Values other than Booleans:
    if(0)
        console.log('0 is truthy'); //false
    if(1)
        console.log('1 is truthy'); //true
    if(NaN)
        console.log('NaN is truthy'); //false
    if('hello')
        console.log('strings are truthy'); //true
    if('')
        console.log('empty strings are truthy'); //false
    if([1,2,3])
        console.log('arrays are truthy'); //true
    if([])
        console.log('empty arrays are truthy'); //true
    if({name: 'john'})
        console.log('objects are truthy'); //true
    if({})
        console.log('empty objects are truthy'); //true
    if(undefined)
        console.log('undefined is truthy'); //false
    if(null)
        console.log('null is truthy'); //false